import React from 'react';
import './City.css'
import { Link, useParams } from 'react-router-dom';

export default function City({onFilter, onClose}) {

    const { cityID } = useParams()

    const city = onFilter(cityID) 

    if(city){
        return (
            <div className="city">
                <div className="container">
               
                    <div>
                        <div>
                            <h3 className='maxTitle'>{city.name}</h3>
                            <hr className="sep"/>
                        </div>

                        <div style={{'marginLeft':'10px'}} className="tempData">
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

                        <div style={{'textAlign':'left'}} className="atmosphericData">
                            <p>{city.wind} m/s</p>
                            <p>{city.humidity}%</p>
                            <p>{city.pressure} mmHg</p>
                        </div>

                    </div>
                    <div><Link to="/"><button className="closingMax" onClick={ onClose }> X </button></Link></div>
                    
                </div>
                
            </div>
                )
            } else {
                return <h1 className="noData">No hay ciudad para mostrar</h1>}
    
}