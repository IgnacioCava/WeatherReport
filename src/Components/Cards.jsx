import React from "react";
import Card from "./Card.jsx"
import "./Cards.css"

export default function Cards(props){
    return(
        <div className="Cards">
            {props.cities.map(city=>
                        <Card key={city.id}
                        name={city.name} 
                        temp={city.main.temp}
                        min={city.main.temp_min} 
                        max={city.main.temp_max} 
                        img={city.weather[0].icon}
                        onClose={() => props.onClose(city.id)}
                    /> )}
        </div>
    )
}