import React from 'react'
import { Link } from "react-router-dom"
import "../ButtonLink/BtnLinks.css"

const BtnLink = (props) => {
  return (
    <div className={props.classe}>
        <Link to={props.route}>{props.textLink}</Link>
    </div>
  )
}

export default BtnLink