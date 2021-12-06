import React from 'react';
import './City.css'
import { NavLink, useParams } from 'react-router-dom';

export default function City({onFilter}) {

    const { cityID } = useParams()

    const city = onFilter(cityID) 

    if(city){
        return (
            <div className="ciudad">
                    <div className="container">
                        <h2>{city.name}</h2>
                        <div className="maxInfo">
                            <div>Temperature: {city.temp}°C</div>
                            <div>Climate: {city.weather}</div>
                            <div>Wind speeds: {city.wind} km/h</div>
                            <div>Cloudiness: {city.clouds}</div>
                            <div>Latitude: {city.latitud}º</div>
                            <div>Longitude: {city.longitud}º</div>
                        </div>
                    </div>
                    
                    <NavLink className="backSpace" to='/'>back</NavLink> 
                    
            </div>
                )
            } else {
                return <h1 className="noData">No hay ciudad para mostrar</h1>}
    
}