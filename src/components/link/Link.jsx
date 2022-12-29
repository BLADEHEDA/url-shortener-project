import React, { useState,useEffect } from 'react'
import Button from '../button/Button'

const Link = () => {

  const [name,setname] =useState(" ")
 
  const handleChange =(e)=>{
    let inputVal = e.target.value;
    setname(inputVal)
  }
      const handleSubmit=(e)=>{
        e.preventDefault();
        e.target.reset();
    }
  
    var urlPattern = new RegExp('^(https?:\\/\\/)?'+ // validate protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // validate domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // validate OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // validate port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // validate query string
    '(\\#[-a-z\\d_]*)?$','i'); // validate fragment locator

const [users, setUsers] = useState([])

const fetchUserData = () => {
  fetch(`https://api.shrtco.de/v2/shorten?url=${name}`)
    .then(response => {
      return response.json()
    })
    .then(data => {
      setUsers(data)
      if(urlPattern.test(name)){
        console.log(" bro its true");
        console.log(name);
        console.log(data.result.full_short_link  ); 
      }
      else{
        console.log("fork you  fake mehn");
      }
    })

}
useEffect(() => {
  fetchUserData()
},[])
// the end of the api fetch the beginnning of parametrs analysis

  return (
    <div >
   
          <form action="" className="form main-link" onSubmit={handleSubmit}>  
            <div className="link-input"> <input type="text" className='link' onChange={handleChange} 
             placeholder='Shorten a link here' />  </div>
            <div className="link-btn "> 
            <Button text="Shorten it !" style={{width:"100%" ,fontSize:"18px",padding:"0.7em",fontWeight:"bold", borderRadius:"7px" }}  /> 
            </div>
            </form>
       
        <section className="statistics">
          <h1 className="stats-header">Advanced Statistics</h1>
          <p className="ststs-content">  Track how your links are performing across the web with our 
            advanced statistics dashboard.</p>
        </section>
       
    </div>
  )
}

export default Link
