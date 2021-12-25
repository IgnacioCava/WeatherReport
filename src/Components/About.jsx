import React from 'react'
import { Link } from 'react-router-dom';
import './About.css'
import './City.css' 

export default function About (){
    return(
        <div className="About">
            <h1>Weather App</h1>
            <p style={{marginBottom:0}}>This is a test app, created to learn and practice frontend web development,</p>
            <p style={{marginTop:0}}>mostly APIs usage and responsive design</p>
            <p>However, the app is completely functional, as I paid as much attention to detail as my inquisition allowed me to</p>
            <ul aria-label="Current Problems">
                <li>
                    Location detector might be a few kilometers offset
                </li>
            </ul>
            <h2>Instructions:</h2>
            <p>This app will provide information about the current climatic status of a given location</p>
            <p style={{marginBottom:0}}>Simply write a location's name in the searchbar on the topright corner</p>
            <p style={{marginTop:0}}>Once you're done, hit enter or click/tap the search button</p>
            <p>It can be anything, a city, a country, even a continent</p>
            <p>However, keep in mind there can be multiple locations for a given name</p>
            <p style={{marginBottom:0}}>In these cases, you can append the location's country's initials next to it,</p>
            <p style={{marginTop:0}}>in the syntaxis shown in the searchbar</p>
            <p></p>
            <hr/>
            <Link className="link" to='/'>
                → Back ←
            </Link>
            <hr/>
        </div>
    )
}