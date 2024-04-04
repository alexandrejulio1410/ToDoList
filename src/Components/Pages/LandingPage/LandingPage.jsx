import React from 'react'
import '../LandingPage/LandingPage.css'
import { Link }  from "react-router-dom";

import logotipo_icon from '../../Assets/checklist_rtl.png'

const LandingPage = () => {
  return (
    
    <div className='conteiner'>
        <div className="content">
            <div className="titulo">To-do <br />List</div>
            <div className="logomarca">
                <img src={logotipo_icon} alt="Logo To do List" />
            </div>
        </div>
        <div className="contentTexto">
        remember what you have to do 
        <div className="marcador">
            <div className="readAbout">
                <Link to="/About">read about us</Link>
            </div> 
        </div>  
        </div>
        <div className="butoesLanding">
            <div className="btnSignIn">                
                <Link to="/Signup">Sign in</Link>
            </div>
            <div className="btnSignUp">
                Create account
            </div>
        </div>
    </div>
  )
}

export default LandingPage
