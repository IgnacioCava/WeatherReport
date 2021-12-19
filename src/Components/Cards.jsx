import React from 'react';
import Card from './Card.jsx'
import './Cards.css'


export default function Cards({cities, onClose}){
    if(cities){   
        return(
            <div className='Cards'>
                {cities.map(city=> <Card 
                        key={city.id}
                        id={city.id}
                        name={city.name} 
                        temp={city.temp}
                        min={city.min} 
                        max={city.max} 
                        img={city.img}
                        weather={city.weather}
                        onClose={() => onClose(city.id)}
                        /> 
                    )
                }
            </div>
        )
    }
}