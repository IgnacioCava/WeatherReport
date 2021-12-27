import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Cards from '../Components/Cards.jsx'
import Nav from '../Components/Nav.jsx'
import City from '../Components/City.jsx'
import About from '../Components/About.jsx'
import './backgrounds/dusk.jpg'
import './backgrounds/dawn.jpg'
import './backgrounds/day.jpg'
import './backgrounds/night.jpg'
import './backgrounds/bodyBackground.css'
import tick from './tick.png'
import error from './error.png'

function App() {

  var IP=''
  var apiKey = '4ae2636d8dfbdc3044bede63951a019b'
  const [cities, setCities] = useState([]);

  useEffect(()=>{
    
      if(localStorage.getItem('storage')) setCities(JSON.parse(localStorage.getItem('storage')))
      else localStorage.setItem('storage', JSON.stringify(cities))
 
  },[])// eslint-disable-line react-hooks/exhaustive-deps

  

  function onSearch(city,cityCode) {
    var findings
    if(cityCode) findings=fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${cityCode}&appid=${apiKey}&units=metric`)//&units=metric&lang=${language}
    else findings=fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
      findings.then(r => r.json())
      .then((resource) => {
        if(resource.main !== undefined){
          const city = {
            country: resource.sys.country,
            min:  Math.floor(resource.main.temp_min),
            max: Math.ceil(resource.main.temp_max),
            img: resource.weather[0].icon,
            id: resource.id,
            wind: resource.wind.speed,
            temp: resource.main.temp,
            feels_like: resource.main.feels_like,
            humidity: resource.main.humidity,
            name: resource.name,
            weather: resource.weather[0].main,
            desc: resource.weather[0].description,
            clouds: resource.clouds.all,
            pressure: resource.main.pressure,
            latitud: resource.coord.lat,
            longitud: resource.coord.lon
          };
          let foundCity = cities.find(c => c.id === city.id)

          if(foundCity) searchHandler('This location is already on screen')

          else {
            setCities(previousCities => [...previousCities, city])
            searchHandler('Location found')
          }
        } else searchHandler('No location found')
      }); 
  }
  
  useEffect(()=>{
    localStorage.setItem('storage', JSON.stringify(cities))
  },[cities])
  
  /******DETECT USER'S CURRENT LOCATION********/
  function locator(){
    
    fetch(`https://ipwhois.app/json/${IP}`)
    .then(r => r.json())
    .then((resource) => {
      let filter = cities.find(c => c.name===resource.city)
      if(filter) {
        searchHandler('Your location has already been displayed')
      }
      else{
        onSearch(resource.city, resource.country_code)
      }
    })
  }
  /********************************************/

  function searchHandler(message){

    document.querySelector('.searchMessage').style.cssText = `
        top : 60px;
        visibility : visible;
        border-left: 10px solid rgb(255, 44, 44);
      `
    document.querySelector('.searchState').innerHTML='Error'
    document.querySelector('.searchIcon').src=error
    document.querySelector('.searchHandled').innerHTML=message

    if(message==="Location found"){
      
      document.querySelector('.searchMessage').style.cssText = `
        top : 60px;
        visibility : visible;
        border-left: 10px solid rgb(44, 165, 72);
      `
      document.querySelector('.searchState').innerHTML='Success'
      document.querySelector('.searchIcon').src=tick
    }

    setTimeout(()=>{
      document.querySelector('.searchMessage').style.cssText = `
      top : -30px;
      visibility : hidden;
    `},
    2500)
  }

  function onClose(id) {
    setCities(previousCities => previousCities.filter(city => city.id !== id));//Filters city with searched id from the cities array
  }

  function onFilter(ciudadId) {
    let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
    if(ciudad.length > 0) {
        return ciudad[0];
    } else {
        return null;
    }
  }

  /* SET DYNAMIC BACKGROUND FOR HTML BODY BASED ON THE USER'S DEVICE'S TIME */
  (function timing(){
    var currentDate = new Date();
    var time=currentDate.getHours()
  
    if(time>=5&&time<9) document.body.className='dawn'
    if(time>=9&&time<=17) document.body.className='day'
    if(time>17&&time<20) document.body.className='dusk'
    if(time>=20||time<5) document.body.className='night'
  })()
  /**************************************************************************/

  return (
    <div className="App">

      <div className="searchMessage">
          <img className="searchIcon" src={tick} alt='status'/>
          <div>
              <p className="searchState">Success</p>
              <p className="searchHandled">Location found</p>
          </div>
      </div>

      <Nav onSearch={ onSearch } locator={ locator } searchHandler={ searchHandler }/>
      <div style={{height:'70px'}}></div>
      <Routes>
        <Route
          path='/'
          element={cities.length===1?<City onFilter={onFilter} onClose={(id) => onClose(id)} cities={ cities }/>:<Cards cities={ cities } onClose={ onClose }/>}
        />
        <Route 
          path='/about'
          element={<About/>}
        />
        <Route
          path='/city/:cityID'
          element={<City onFilter={onFilter} onClose={ (id) => onClose(id) } cities={ cities }/>}
        />
      </Routes>

    </div>
  );
}

export default App;
