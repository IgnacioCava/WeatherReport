import React from 'react'
import {Link} from 'react-router-dom'
import './Card.css'

export default function Card(props){
    return(
        <div className="Card">
            <button className="closing" onClick={props.onClose}> X </button>
            
            <h1><Link className="titleLink"  to={`/ciudad/${props.id}`}>{ props.name }</Link></h1>
            <div className="info">
                <div className="main">
                <h2>
                    {props.temp}K
                </h2>
                <img className="weatherImage" src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="weather representative"/>
                </div>
                <div className="subInfo">
                <h5><p>{ props.max }K | { props.min }K</p></h5>
                </div>
            </div> 
        </div>
    )
}