import React, { useState} from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Cards from '../Components/Cards.jsx'
import Nav from '../Components/Nav.jsx'
import City from '../Components/City.jsx'
import About from '../Components/About.jsx'
import './dusk.jpg'
import './dawn.jpg'
import './day.jpg'
import './night.jpg'
import './bodyBackground.css'

function App() {

  var apiKey = '4ae2636d8dfbdc3044bede63951a019b'
  const [cities, setCities] = useState([]);

  function onSearch(city) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
      .then(r => r.json())
      .then((resource) => {
        if(resource.main !== undefined){
          console.log(resource)
          const city = {
            min: Math.floor(resource.main.temp_min),
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
          if(foundCity) return alert('Esta ciudad ya se encuentra en la lista')
          else return setCities(previousCities => [...previousCities, city]);
          
        } else {
          alert('Ciudad no encontrada');
        }
      });

  }

  /******DETECT USER'S CURRENT LOCATION********/
  var IP=''

  if(cities.length===0){
    fetch(`http://ipwhois.app/json/${IP}`)
    .then(r => r.json())
    .then((resource) => {
      onSearch(resource.city)
      console.log(resource)
  })
  }
  /*********************************************/

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
  var currentDate = new Date();
  var time=currentDate.getHours()

  if(time>=5&&time<9) document.body.className='dawn'
  if(time>=9&&time<=17) document.body.className='day'
  if(time>17&&time<20) document.body.className='dusk'
  if(time>=20&&time<5) document.body.className='night'
  console.log(time, document.body.className)
  /**************************************************************************/

  return (
    <div className="App">
      
      <Nav onSearch={ onSearch }/>
      <div style={{height:'70px'}}></div>
      <Routes>
        <Route
          path='/'
          element={cities.length==1?<City onFilter={onFilter} onClose={onClose} cities={ cities } only={cities[0].id}/>:<Cards cities={ cities } onClose={ onClose }/>}
        />
        <Route 
          path='/about'
          element={<About/>}
        />
        <Route
          path='/city/:cityID'
          element={<City onFilter={onFilter} onClose={onClose} cities={ cities }/>}
        />
      </Routes>

    </div>

  );
}

export default App;
