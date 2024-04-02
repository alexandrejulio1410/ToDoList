import React from "react";
import "../About/About.css";
import { Link }  from 'react-router-dom';


const About = () => {
  return (
    <div className="conteinerAbout">
      <h1>About</h1>
      <p>
        A to-do list is a practical tool for organizing tasks. You can create a
        list of things you need to do and mark them as completed once finished.
        It’s a straight forward way to stay organized and manage your
        responsibilities efficiently.
        <br/>
        Developed by
      </p>  
        <div className="equipe">
        <p>
        <br />UI Design/front-end - <a href="https://github.com/CarlaMSLopes">Carla Maria Santana Lopes –
        01440665 </a>
        <br />
        João Vitor Gomes de Siqueira - 01590594 
        <br />
        Thiago Silva de
        Souza – 01582033         
        <br />Iago Jorge Cavalcanti Silva – 01598123 
        <br />Alexandre Julio Avelino
        da Silva - 01648836 
        <br />Ottom Victor da Silva Oliveira - 01644403 Breno
        Marques da Silva Santos – 10008876 
        <br />Arthur Vinicius Albuquerque dos
        Santos - 01570824
      </p>
        </div>        
      <div className="butao">
      <div className="btnReturn">        
        <Link to="/">Return</Link>        
      </div>
      </div>
    </div>
    
  );
};

export default About
