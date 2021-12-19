import React, { useState} from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Cards from '../Components/Cards.jsx'
import Nav from '../Components/Nav.jsx'
import City from '../Components/City.jsx'
import About from '../Components/About.jsx'

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


  if(cities.length==0){
    fetch(`http://ipwhois.app/json/${IP}`)
    .then(r => r.json())
    .then((resource) => {
      onSearch(resource.city)
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

  return (
    <div className="App">
      
      <Nav onSearch={ onSearch }/>
      <Routes>
        <Route
          path='/'
          element={<Cards cities={ cities } onClose={ onClose }/>}
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
