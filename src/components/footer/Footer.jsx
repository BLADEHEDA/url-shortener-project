import React from 'react'
import Button from '../button/Button'
import logo from "../images/logo.svg"
import facebook from "../images/icon-facebook.svg"
import twitter from "../images/icon-twitter.svg"
import pinterest from "../images/icon-pinterest.svg"
import instagram from "../images/icon-instagram.svg"


const Footer = () => {
  return (
    <div>
      <section className="boost">
            <h1 className="boost-head"> Boost your links today</h1>
           <div className="btn0" >  
            <Button 
            style={{width :"100%", borderRadius:"30px", 
            fontSize:"25px",fontWeight:"bold" ,padding:"0.7em 0em"}} 
            text="Get Started" />
             </div>
      </section>
        <footer className="footer">
        
            <h1 className="f-logo">Shortly</h1>
            <ul className="footer-links">
                <footer className="one">
               <li className="f-links" id='f-link1'><a href="#" className="f-link" >  Features</a> </li>
               <li className="f-links"><a href="#" className="f-link">Link Shortening</a> </li>
               <li className="f-links"><a href="#" className="f-link">Branded Links</a> </li>
               <li className="f-links"><a href="#" className="f-link">Analytics</a> </li>
               </footer>
                   <footer className="one1">
                <li className="f-links f-link1" id='f-link1'><a href="#" className="f-link" >  Resources</a> </li>
                <li className="f-links"><a href="#" className="f-link">Blog</a> </li>
                <li className="f-links"><a href="#" className="f-link">DevelopersLinks</a> </li>
                <li className="f-links"><a href="#" className="f-link">Support</a> </li>
                </footer>
                    <footer className="one2">
                    <li className="f-links f-link1" id='f-link1'><a href="#" className="f-link" >     Company</a> </li>
                    <li className="f-links"><a href="#" className="f-link">About</a> </li>
                    <li className="f-links"><a href="#" className="f-link">Careers</a> </li>
                    <li className="f-links"><a href="#" className="f-link">Contact</a> </li>
                    </footer>
            </ul>
                    <footer className="footer-icons">
                        <div className="icons"> <img src={facebook} alt="fb-icon" className="icon" /></div>
                        <div className="icons"> <img src={twitter} alt="twitter-icon" className="icon" /></div>
                        <div className="icons"> <img src={pinterest} alt="pinterest-icon" className="icon" /></div>
                        <div className="icons"> <img src={instagram} alt="nstagram-icon" className="icon" /></div>
                    
                    </footer>
         
        </footer>
    </div>
  )
}

export default Footer
