import React, { useState } from "react";
import './SearchBar.css'

export default function SearchBar({onSearch}){

    const [newCity, newCitySetter] = useState('')
    
    return(
        <div>
            <form onSubmit={(evnt) => {
                evnt.preventDefault()
                onSearch(newCity)
                newCitySetter('')
            }}>
            <input type="text" placeholder="Busque una ciudad..." value={newCity} onChange={(cityInput) => newCitySetter(cityInput.target.value)}/>
            <input type="submit" className="submitButton" value="Buscar"/>
            </form>
        </div>
    )
}