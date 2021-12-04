import React from "react";
import './SearchBar.css'

export default function SearchBar(props){
    return(
        <div>
            <input type="text" placeholder="Busque una ciudad..."></input>
            <input type="submit" className="submitButton" value="Buscar" onClick={() => props.onSearch()}></input>
        </div>
    )
}