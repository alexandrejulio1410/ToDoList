import React from "react";
import "../About/About.css";
import { Link }  from 'react-router-dom';
import LinkStyle from "../../LinkEstilizado/LinkStyle";


const About = () => {
  return (
    <section className="conteiner-About">
      <h1 className="titulo-about">About</h1>
      <p className="paragrafo-About">
        A to-do list is a practical tool for organizing tasks. You can create a
        list of things you need to do and mark them as completed once finished.
        It’s a straight forward way to stay organized and manage your
        responsibilities efficiently.
        <br/>
        Developed by
      </p>  
        <div className="equipe-About">
        <p className="paragrafoEquipe-About">
        <br />UI Design/front-end - <a href="https://github.com/CarlaMSLopes">Carla Lopes –
        01440665 </a>
        <br />João Siqueira - 01590594 
        <br />Thiago Souza – 01582033         
        <br />Iago Silva – 01598123 
        <br />Alexandre Silva - 01648836 
        <br />Ottom Oliveira - 01644403
        <br />Breno Santos – 10008876 
        <br />Arthur Santos - 01570824
        <br />Igor Silva - 01609891
      </p>
        </div>        
      <div className="butaoReturn-About">
      <div className="btnReturn">        
        <Link to="/">Return</Link>        
      </div>
      </div>
    </section>
    
  );
};

export default About
