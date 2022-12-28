import React from 'react'
import Button from '../button/Button'
import bgboost from "../images/bg-boost-mobile.svg"
import bgboost1 from "../images/bg-boost-desktop.svg"
import illustration from "../images/illustration-working.svg"




const Mainbar = () => {
  return (
    <div>
        <section className="main">
            <article className="illustrate">
            <img src={illustration} className="ilustrate-img" alt="illustration-img" />
            </article>
            <article className="main-container">
            <h1 className="main-header">  More than just shorter links</h1>
            <p className="main-content">   Build your brand’s recognition and get detailed insights 
            on how your links are performing.  </p>
            <div className="btn">  
            <Button 
            style={{width :"100%", borderRadius:"30px", 
            fontSize:"20px",fontWeight:"bold" ,padding:"0.8em 0em"}} 
            text="Get Started" />
             </div>
            </article>
        </section>
      
    </div>
  )
}

export default Mainbar
