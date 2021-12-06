import React from 'react'
import { Link } from 'react-router-dom';
import './About.css'
import './City.css' 

export default function About (){
    return(
        <div className="About">
            <h1>Weather App</h1>
            <p>App de prueba para subir a github cuando esté terminada</p>
            <p>La app está casi terminada, falta diseño y algunas cositas</p>
            <hr/>
            <Link className="backSpace" to='/'>
                <span>back</span>
            </Link>
        </div>
    )
}