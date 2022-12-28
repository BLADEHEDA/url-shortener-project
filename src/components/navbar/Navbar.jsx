import React, { useState } from 'react'
import logo from "../images/logo.svg"
import hamburger from "../images/icon-menu.svg"
import Button from "../button/Button"

const Navbar = () => {

  // usestae to hide and show components based on button click 
  const [show, setShow] = useState();
  const display = show ?"show":"navlinks-mob";
  const toggleshow=()=>{
    setShow(!show);
  }
  return (
    <div>

        <nav className="mobile">   
          <div className="mob-left"><img src={logo} alt="logo" className="logo" /></div>
          <div className="mob-right">
            <div onClick={toggleshow}> <img src={hamburger} alt="menu-btn"  className="haburger"/></div>
          <ul className={`navlinks-mob ${display}`}>
           <li className="navlink"><a href="/">Features</a> </li>   
           <li className="navlink"><a href="/"> Pricing</a> </li>  
           <li className="navlink"><a href="/"> Resources</a> </li> <hr />
           <li className="navlink"><a href="/">Login </a> </li>
         {/* passing styles as props to be able to customize it whenever reusing the button  */}
            <Button style={{  marginTop:"2em" , width:"90%",borderRadius:"30px", fontSize:"20px",fontWeight:"bold" ,padding:"0.5em 0em"}} text="Sign Up"/>
            </ul>
            </div>
      </nav>
        <nav className="desktop">  
                <nav className="des-left">
          <div className="left-logo"><img src={logo} alt="logo" className="logo" /></div>
            <div className="links">
              <ul className="navlinks  desktop">
            <li className="navlink"><a href="/">Features</a> </li>   
            <li className="navlink"><a href="/"> Pricing</a> </li>  
            <li className="navlink"><a href="/"> Resources</a> </li> 
              </ul>
              </div>
          </nav>
          <div className="des-right">
            <div className="b1">login</div>
            <div className="b2">
            <Button style={{ borderRadius:"10px", 
            fontSize:"10px",fontWeight:"bold" ,padding:"0.5em 1em"}} text="Sign Up"/>
            </div>
          </div>
        </nav>
    </div>
  )
}

export default Navbar
