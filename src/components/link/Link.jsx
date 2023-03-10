import React, { useState,useEffect } from 'react'
import Button from '../button/Button'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { toHaveErrorMessage } from '@testing-library/jest-dom/dist/matchers';

const Link = () => {
  // declaring the variable to validate the url
  var urlPattern = new RegExp('^(https?:\\/\\/)?'+ // validate protocol
  '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // validate domain name
  '((\\d{1,3}\\.){3}\\d{1,3}))'+ // validate OR ip (v4) address
  '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // validate port and path
  '(\\?[;&a-z\\d%_.~+=-]*)?'+ // validate query string
  '(\\#[-a-z\\d_]*)?$','i'); // validate fragment locator

  // declare your various states 
  const [name,setname] =useState();
  const [links,setlinks]= useState([]);
  const [users, setUsers] = useState([]);
  const [short,setshort]= useState("");
  const [copied,setcopied]= useState(false);
  const [formerrors,setformerrors]=useState(false);

  let invalidLink
    let inputVal
  // handle the states and its behaviours 
  const handleChange =(e)=>{
    inputVal = e.target.value;
      setname(inputVal); 
  }

      const handleSubmit=(e)=>{
        e.preventDefault();
        // check if the link is valid 
          if(!urlPattern.test(name)){  
            console.log("not a valid the link ");
            setformerrors(true);
            setname("");
         }
      // if not fetch the data 
        fetchUserData();
        setname("");
    }

    console.log(name +" is the input");

// The beginning of the fetching from the api and shortening the link 
const fetchUserData = () => {
  fetch(`https://api.shrtco.de/v2/shorten?url=${name}`)
    .then(response => {
      return response.json()
    })
    .then(data => {
      setUsers(data)
      if(urlPattern.test(name)){

        setformerrors(false);
        console.log(name);
        let shortlink= data.result.full_short_link  

        console.log(shortlink); 
           setshort(shortlink)
        // the functions to add the element to the list 
        const link= {
          id:Math.floor(Math.random()*10000),
          name:name
        }
        const newlink = [...links ,link];
        setlinks(newlink);
        console.log("Thsi  is  a valid the link ");
        setname("");
      }
    })
}
useEffect(() => {
  fetchUserData()
},[])

  return (
    <div >
          <form action="" className="form main-link" onSubmit={handleSubmit}>  
            <div className="link-input">
               <input type="text"  className={`link`}  onChange={handleChange} 
             placeholder='Shorten a link here' value={name} />  
           {formerrors ?<div className="error">Please add a link </div>:null }
              </div>
            <div className="link-btn " > 
            <Button text="Shorten it !"  style={{width:"100%" ,fontSize:"18px",padding:"0.7em",fontWeight:"bold", borderRadius:"7px" }}  /> 
            </div>
            </form>
            {/* setup an add the lements to the list  */} 
            {
              links.map((link)=>{
                const {id,name} = link
                return <section className='shortened' key={id}>
                    <article className="link-active-one"> {name} </article>  <hr className='horisontal' />
                      <article className="link-active-two">
                      <div className="shorten-link"> {short} </div>
                    
                        <CopyToClipboard  text={short}  onCopy={() =>setcopied(true)}> 
                            <div className="shorten-btn">  
                            <Button text="copy  " style={{width:"100%" ,fontSize:"17px",
                             padding:"0.6em",fontWeight:"bold", borderRadius:"7px" }}  />
                            </div>
                        </CopyToClipboard>
                      </article>
                </section>

              })
            }
       
        <section className="statistics">
          <h1 className="stats-header">Advanced Statistics</h1>
          <p className="ststs-content">  Track how your links are performing across the web with our 
            advanced statistics dashboard.</p>
        </section>
       
    </div>
  )
}

export default Link
