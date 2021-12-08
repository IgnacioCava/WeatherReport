import React from 'react';
import './City.css'
import { Link, useParams } from 'react-router-dom';
import Cards from './Cards.jsx'
import './Card.css'
import './NightCard.css'


export default function City({onFilter, onClose, cities}) {

    const { cityID } = useParams()

    const city = onFilter(cityID) 
    
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
                            
                            <div>
                                <div>
                                    <h3 className={(cycle&&'maxTitle')||'nightMaxTitle'}>{city.name}</h3>
                                    <hr className={(cycle&&'sep')||'nightSep'}/>
                                </div>

                                <div className={(cycle&&'tempData')||'nightTempData'}>
                                    <p className="back"><Link className="backLink" to='/'>{"<"} </Link></p>
                                    <div style={{'paddingTop':'10px'}}>
                                        <h1 style={{margin:0, fontSize:40}}>{city.temp}°</h1>
                                        <p style={{margin:0}}>{city.min}° | {city.max}°</p>
                                    </div>

                                    <div>
                                        <img src={`http://openweathermap.org/img/wn/${ city.img }@2x.png`}/>
                                    </div>

                                    <div style={{paddingTop:'25px',marginRight:'5px'}}>
                                        <p style={{margin:'0', 'fontSize':'larger', 'textAlign':'left'}}>{city.desc}</p>
                                        <p style={{margin:'0', 'fontSize':'small'}}>Feels like {city.feels_like}°</p>
                                    </div>
                                    
                                </div>
                                
                            </div>

                            <div className="mainData">

                                <div className={(cycle&&'atmosphericData')||'nightAtmosphericData'}>
                                    <p>{city.wind} m/s</p>
                                    <p>{city.humidity}%</p>
                                    <p>{city.pressure} mmHg</p>
                                </div>

                            </div>
                            <div><Link to="/"><button className="closingMax" onClick={ onClose }> X </button></Link></div>
                            
                        </div>
                    </div>
                    
                </div>
                <Cards cities={ cities.filter(c => c.id != parseInt(cityID)) } onClose={ onClose }/>
            </div>
            
                )
            } else {
                return window.location.replace("/");}
    
}