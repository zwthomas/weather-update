import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import axios from 'axios';
import clear_day from "./imgs/clear_day.svg"
import clear_night from "./imgs/clear_night.svg"
import cloudy from "./imgs/cloudy.svg"
import drizzle from "./imgs/drizzle.svg"
import flurries from "./imgs/flurries.svg"
import fog from "./imgs/fog.svg"
import fog_light from "./imgs/fog_light.svg"
import freezing_drizzle from "./imgs/freezing_drizzle.svg"
import freezing_rain from "./imgs/freezing_rain.svg"
import freezing_rain_heavy from "./imgs/freezing_rain_heavy.svg"
import freezing_rain_light from "./imgs/freezing_rain_light.svg"
import ice_pellets from "./imgs/ice_pellets.svg"
import ice_pellets_heavy from "./imgs/ice_pellets_heavy.svg"
import ice_pellets_light from "./imgs/ice_pellets_light.svg"
import mostly_clear_day from "./imgs/mostly_clear_day.svg"
import mostly_clear_night from "./imgs/mostly_clear_night.svg"
import mostly_cloudy from "./imgs/mostly_cloudy.svg"
import partly_cloudy_day from "./imgs/partly_cloudy_day.svg"
import partly_cloudy_night from "./imgs/partly_cloudy_night.svg"
import rain from "./imgs/rain.svg"
import rain_heavy from "./imgs/rain_heavy.svg"
import rain_light from "./imgs/rain_light.svg"
import snow from "./imgs/snow.svg"
import snow_heavy from "./imgs/snow_heavy.svg"
import snow_light from "./imgs/snow_light.svg"
import tstorm from "./imgs/tstorm.svg"






async function getWeather(event, setWeather) {
  event.preventDefault();  

  const response = await axios.get("https://api.climacell.co/v3/weather/forecast/daily?lat=41.881832&lon=-87.623177&unit_system=us&start_time=now&fields=precipitation%2Csunrise%2Csunset%2Cprecipitation_probability%2Cmoon_phase%2Cweather_code%2Ctemp&apikey=")
  const current = await axios.get("https://api.climacell.co/v3/weather/realtime?lat=41.881832&lon=-87.623177&unit_system=us&fields=temp%2Cweather_code&apikey=")
  // alert(JSON.stringify(current.data.temp.value))
  // alert(current.data.temp.value)
  setWeather({
    city: "Chicago, IL", 
    temp: current.data.temp.value,
    weather_code: current.data.weather_code.value
  })
}

function App() {
  const weatherLookup = {
    "clear_day":"",
    "clear_night":"",
    "cloudy":"",
    "drizzle":"",
    "flurries":"",
    "fog":"",
    "fog_light":"",
    "freezing_drizzle":"",
    "freezing_rain":"",
    "freezing_rain_heavy":"",
    "freezing_rain_light":"",
    "ice_pellets":"",
    "ice_pellets_heavy":"",
    "ice_pellets_light":"",
    "mostly_clear_day":"",
    "mostly_clear":["Mostly Clear", mostly_clear_night],
    "mostly_cloudy":"",
    "partly_cloudy_day":"",
    "partly_cloudy_night":"",
    "rain":"",
    "rain_heavy":"",
    "rain_light":"",
    "snow":"",
    "snow_heavy":"",
    "snow_light":"",
    "tstorm":"",
    "---":""
  
  }

  const [weather, setWeather] = useState({city: "----",temp: "--", weather_code: "---"});
  return (
    <div className="App">
      <div className="holder">
        <Form onSubmit={(event) => getWeather(event,setWeather)}>
          <div className="search">
            <Form.Control type="textarea" placeholder="🔍 Search" />
            <Button type="submit" variant="secondary">🔍</Button>
          </div>
          <div className="weather">
            <h1>➤ {weather.city}</h1>
            <div className="currentConditions">
              <img src={weatherLookup[weather.weather_code][1]} width="64" height="64" /> 
              <h2 className="temp">{weather.temp}°</h2> 
              <h3 className="condition">{weatherLookup[weather.weather_code][0]}</h3>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default App;
