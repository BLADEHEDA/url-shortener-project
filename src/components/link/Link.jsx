import React from 'react'
import Button from '../button/Button'
import bgshorten from "../images/bg-shorten-mobile.svg"
import bgshorten1 from "../images/bg-shorten-desktop.svg"

const Link = () => {
  return (
    <div >
         
        <section className="main-link">
            <div className="link-input"> <input type="text" className='link'  placeholder='Shorten a link here '/>  </div>
          
            <div className="link-btn "> 
            <Button text="Shorten it !" style={{width:"100%" ,fontSize:"18px",padding:"0.7em",fontWeight:"bold", borderRadius:"7px" }}  /> 
            </div>
         
        </section>
       
        <section className="statistics">
          <h1 className="stats-header">Advanced Statistics</h1>
          <p className="ststs-content">  Track how your links are performing across the web with our 
            advanced statistics dashboard.</p>
        </section>
       
      
    </div>
  )
}

export default Link
