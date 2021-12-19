import React from "react";
import {Link} from "react-router-dom"
import SearchBar from "./SearchBar";
import Logo from "./cloud.png"
import './Nav.css'

export default function Nav(props){
    return(
        <div className="header">
            
            <div className="titleLogo">
                <Link to='/'><img className="logo" src={Logo} alt="Logo"/></Link>
                <p className="title">Weather App</p>
            </div>

            <div className="navigation">
                <Link to='/' className="link">
                Home
                </Link>
                <hr className="separator"/>
                <Link to='/about' className="link">
                About
                </Link>
            </div>

            <div className="SearchBar">
                <SearchBar onSearch={props.onSearch}/>
            </div>

        </div>
    )
}