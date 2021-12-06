import React from 'react'
import {Link} from 'react-router-dom'
import './Card.css'

export default function Card(props){
    return(
        <div className="Card">
            <Link to="/"><button className="closing" onClick={ props.onClose }> X </button></Link>
            <Link className="cityLink" to={`/city/${ props.id }`}>
            <h1 className="titleContainer">{ props.name }</h1>
            <div className="info">
                <div className="main">
                    <h2 className="temp">
                        { props.temp }°C
                    </h2>
                    <p className="subTemp">{ props.max } | { props.min }</p>
                </div>
                <div className="weatherImage">
                    <img src={`http://openweathermap.org/img/wn/${ props.img }@2x.png`} alt="weather representative"/>
                </div>
            </div>
            </Link>
        </div>
    )
}