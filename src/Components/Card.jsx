import React from 'react'
import {Link} from 'react-router-dom'
import './Card.css'
import './NightCard.css'
import './cloudy-day.jpg'
import './cloudy-night.jpg'
import './rainy-day.jpg'
import './rainy-night.jpg'
import './daytime-thunderstorm.jpg'
import './nighttime-thunderstorm.jpg'
import './snow-day.jpg'
import './snow-night.jpg'

export default function Card({id,name,temp,min,max,img,weather,onClose}){
    var cycle = img.includes('d')
        return(
            <div className={(cycle&&"Card")||"nightCard"}>
                <div style={{'borderRadius':'10px'}} className={
                    (weather==="Clear"&&((cycle&&"Clear")||"ClearNight"))||
                    (weather==="Clouds"&&((cycle&&"Clouds")||"NightClouds"))||
                    (weather==="Rain"||weather==="Drizzle")&&((cycle&&"Rain")||"NightRain")||
                    (weather==="Thunderstorm"&&((cycle&&"Thunder")||"NightThunder"))||
                    (weather==="Snow"&&((cycle&&"Snow")||"NightSnow"))}
                >
                <button className="closing" onClick={ onClose }> X </button>
                <Link className="cityLink" to={`/city/${ id }`}>
                <h1 className={(cycle&&"titleContainer")||"nightTitleContainer"}>{ name }</h1>
                <div className="info">
                    <div>
                        <h2 className={(cycle&&"temp")||"nightTemp"}>
                            { temp }°C
                        </h2>
                        <p className={(cycle&&"subTemp")||"nightSubTemp"}> { min } | { max }</p>
                    </div>
                    <div className="weatherImage">
                        <img src={`http://openweathermap.org/img/wn/${ img }@2x.png`} alt="weather representative"/>
                    </div>
                </div>
                </Link>
                </div>
            </div>
        )
}