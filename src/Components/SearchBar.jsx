import React, { useState } from "react";
import './SearchBar.css'
import mag from './mag.png'

export default function SearchBar({onSearch}){

    const [newCity, newCitySetter] = useState('')
    
    return(
        <div>
            <form onSubmit={(evnt) => {
                evnt.preventDefault()
                if(newCity==='') alert('Debe ingresar una ciudad')
                else {
                    onSearch(newCity)
                    newCitySetter('')
                }
            }}>
            <div style={{display:'flex', flexDirection:'row'}}>
                <input type="text" className="inputEntry" placeholder="Busque una ciudad..." value={newCity} onChange={(cityInput) => newCitySetter(cityInput.target.value)}/>
                <input type="submit" className="submitButton" value="Buscar"/>
                <input type="image" className="submitButtonImage" src={mag} alt='search' style={{height:'22px',width:'22px'}}/>
            </div>

            </form>
        </div>
    )
}