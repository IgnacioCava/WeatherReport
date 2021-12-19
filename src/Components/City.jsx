import React from 'react';
import './City.css'
import { Link, useParams } from 'react-router-dom';
import Cards from './Cards.jsx'
import './Card.css'
import './NightCard.css'
import wind from './Wind.png'
import humidity from './humidity.png'
import pressure from './pressure.png'


export default function City({onFilter, onClose, cities, only}) {

    const { cityID } = useParams()
    var city = onFilter(cityID)

    if(only) city = onFilter(only)
    
    if(city){
        var weather = city.weather
        var cycle = city.img.includes('d')
        return (
            <div>
                <div className="city">
                    <div style={{borderRadius:'15px'}} className={
                    (weather==="Clear"&&((cycle&&"Clear")||"ClearNight"))||
                    (weather==="Clouds"&&((cycle&&"Clouds")||"NightClouds"))||
                    (weather==="Rain"||weather==="Drizzle")&&((cycle&&"Rain")||"NightRain")||
                    (weather==="Thunderstorm"&&((cycle&&"Thunder")||"NightThunder"))||
                    (weather==="Snow"&&((cycle&&"Snow")||"NightSnow"))}>
                        <div className="container">
                            
                            <div className='mainData'>
                                <div style={{textAlign:'center'}}>
                                    <h3 className={(cycle&&'maxTitle')||'nightMaxTitle'}>{city.name}</h3>
                                    <hr className={(cycle&&'sep')||'nightSep'}/>
                                </div>

                                <div className={(cycle&&'tempData')||'nightTempData'}>
                                    <div>
                                        <h1 className='primaryTemp'>{city.temp}°</h1>
                                        <p style={{margin:0}}>{city.min}° | {city.max}°</p>
                                    </div>
                                    <div>
                                        <img className='weatherIcon' src={`http://openweathermap.org/img/wn/${ city.img }@2x.png`}/>
                                    </div>

                                    <div className='feelsLike'>
                                        <p style={{margin:'0', 'fontSize':'larger'}}>{city.desc.charAt(0).toUpperCase()+city.desc.slice(1)}</p>
                                        <p style={{margin:'0', 'fontSize':'small'}}>Feels like {city.feels_like}°</p>
                                    </div>
                                </div>
                            </div>

                            <div className="miscData">
                                <div className={(cycle&&'atmosphericData')||'nightAtmosphericData'}>
                                    <div className='miscDataSpace'>
                                        <img className='icon' src={wind}/>
                                        {city.wind} m/s
                                    </div>
                                    
                                    <div className='miscDataSpace'>
                                        <img className='icon' src={humidity}/>
                                        {city.humidity}%
                                    </div>

                                    <div className='miscDataSpace'>
                                        <img className='icon' src={pressure}/>
                                        {parseFloat(city.pressure/760).toFixed(2)} atm
                                    </div>
                                </div>
                            </div>

                            <div><Link to="/"><button className="closingMax" onClick={ onClose }> X </button></Link></div>
                            
                        </div>
                    </div>
                    
                </div>
                <Cards cities={ only?[]:cities.filter(c => c.id !== parseInt(cityID)) } onClose={ onClose }/>
            </div>
            )
            } else {
                return window.location.replace("/");}
    
}