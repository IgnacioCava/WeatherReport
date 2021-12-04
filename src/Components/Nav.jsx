import React from "react";
import {Link} from "react-router-dom"
import SearchBar from "./SearchBar";
import Logo from "./cloud.png"
import './Nav.css'


export default function Nav(props){
    return(
        <div className="header">
            <Link to='/'><img className="logo" src={Logo} alt="Logo"/></Link>
            <p className="title">Weather App</p>
            <div className="SearchBar"><SearchBar onSearch={props.onSearch}/></div>
        </div>
    )
}