import React from 'react';
import './App.css';
import Cards from '../Components/Cards.jsx'
import Nav from '../Components/Nav.jsx';
import data from '../data.js'

function App() {

  function onClose(id) {
    
  }

  function onSearch(){
      
  }

  return (
    <div className="App">
      <Nav onSearch={onSearch}/>
      <Cards cities={ data } onClose={onClose}/>
    </div>

  );
}

export default App;
