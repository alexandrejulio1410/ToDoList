import React from "react"
import "../Signup/Signup.css"
import { Link } from "react-router-dom"
import Form from "../../Formulario/Form";
import Btn from "../../Button/Btn";
import BtnLink from "../../ButtonLink/BtnLink";
import LinkStyle from "../../LinkEstilizado/LinkStyle";

// import visibility_icon from '../Assets/visibility.png'
// import visibilityoff_icon from '../Assets/visibility_off.png'

export const Signup = () => {
  return (
    <section className="page-signUp">    
      <section className="container-signUp">
        <BtnLink route="/" textLink="To-do List" classe="btn-home"/>
        <h2 className="subtitulo-signUp">
          Sign Up
        </h2>
        <Form />
        <div className="butoes-signUp">
          <Btn btnTitulo="Sign in" classeBtn="btn-signIn"/>
          <Btn btnTitulo="Create account" classeBtn="btn-signUp"/>
        </div>
      </section>
    </section>
  );
};

export default Signup
