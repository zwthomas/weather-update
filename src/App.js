import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Switch from '@material-ui/core/Switch';
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
import first_quarter from "./imgs/first_quarter.svg"
import  full from "./imgs/full.svg"
import  last_quarter from "./imgs/last_quarter.svg"
import  new_moon from "./imgs/new.svg"
import  waning_crescent from "./imgs/waning_crescent.svg"
import  waning_gibbous from "./imgs/waning_gibbous.svg"
import  waxing_crescent from "./imgs/waxing_crescent.svg"
import waxing_gibbous from "./imgs/waxing_gibbous.svg"
import citation from "./imgs/citation.svg"

// https://www.climacell.co/

const COLORS = {
  bg_dark: "#121212",
  bg_lite: "#FFFFFF"
} 




async function getWeather(event, setWeather) {
  event.preventDefault();  

  const response = await axios.get("https://api.climacell.co/v3/weather/forecast/daily?lat=41.881832&lon=-87.623177&unit_system=us&start_time=now&fields=precipitation%2Csunrise%2Csunset%2Cprecipitation_probability%2Cmoon_phase%2Cweather_code%2Ctemp&apikey=")
  const current = await axios.get("https://api.climacell.co/v3/weather/realtime?lat=41.881832&lon=-87.623177&unit_system=us&fields=temp%2Cweather_code%2Cmoon_phase%2Csunrise%2Csunset&apikey=")
  alert(JSON.stringify(current.data))
  // alert(current.data.temp.value)
  setWeather({
    city: "Chicago, IL", 
    temp: current.data.temp.value,
    weather_code: current.data.weather_code.value,
    moon_phase: current.data.moon_phase.value,
    sunrise: new Date(current.data.sunrise.value).toLocaleTimeString(),
    sunset: new Date(current.data.sunset.value).toLocaleTimeString()
  })
}

function nameForDisplay(codeName) {
  let displayName = []
  codeName.split("_").forEach(part => 
    displayName.push(part.charAt(0).toUpperCase() + part.slice(1))
  )
  return displayName.join(" ")
}

function selectMoonIcon(codeName) {
  switch(codeName) {
    case "first_quarter":
      return first_quarter;
    case "full":
      return full
    case "last_quarter":
      return last_quarter
    case "new":
      return new_moon
    case "waning_crescent":
      return waning_crescent
    case "waning_gibbous":
      return waning_gibbous
    case "waxing_gibbous":
      return waxing_gibbous
    case "waxing_crescent":
    return waxing_crescent
  }
}

function selectWeatherIcon(codeName) {

  switch(codeName) {
    case "freezing_rain_heavy":
      return freezing_rain_heavy;
    case "freezing_rain":
      return freezing_rain;
    case "freezing_rain_light":
      return freezing_rain_light;
    case "freezing_drizzle":
      return freezing_drizzle;
    case "ice_pellets_heavy":
      return ice_pellets_heavy;
    case "ice_pellets":
      return ice_pellets;
    case "ice_pellets_light":
      return ice_pellets_light;
    case "snow_heavy":
      return snow_heavy;
    case "snow":
      return snow;
    case "snow_light":
      return snow_light;
    case "flurries":
      return flurries;
    case "tstorm":
      return tstorm;
    case "rain_heavy":
      return rain_heavy;
    case "rain":
      return rain;
    case "rain_light":
      return rain_light;
    case "drizzle":
      return drizzle;
    case "fog_light":
      return fog_light;
    case "fog":
      return fog;
    case "cloudy":
      return cloudy;
    case "mostly_cloudy":
      return mostly_cloudy;
    case "partly_cloudy":
      return partly_cloudy_day;
    case "partly_cloudy":
      return ;
    case "mostly_clear":
      return mostly_clear_day;
    case "mostly_clear":
      return ;
    case "clear":
      return clear_day;
    case "clear":
      return ;
  }

}
function themeSwitch(colors, setColors) {
  if (colors.bg === COLORS.bg_lite) {
    setColors({
      bg: COLORS.bg_dark,
      font: COLORS.bg_lite
    })
  } else {
    setColors({
      bg: COLORS.bg_lite,
      font: COLORS.bg_dark
    })
  }
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
//weatherLookup[weather.weather_code][1]
  const [weather, setWeather] = useState({
    city: "----",
    temp: "--", 
    weather_code: "---", 
    moon_phase:"---",
    sunrise: "-",
    sunset: "-"
  
  });

  const [colors, setColors] = useState({
    bg: COLORS.bg_lite,
    font: COLORS.bg_dark
  });  
  return (
    <div className="App" style={{backgroundColor: colors.bg}}>
      
      <div className="holder" >
      <Switch className="bob"onClick={() => themeSwitch(colors, setColors)}/>
        <Form onSubmit={(event) => getWeather(event,setWeather)}>
          <div className="search">
            <Form.Control type="textarea" placeholder="🔍 Search" />
            <Button type="submit" variant="secondary">🔍</Button>
          </div>
          <div className="weather">
            <h1 style={{color: colors.font}}>➤ {weather.city}</h1>
            <div className="currentConditions">
              <img src={selectWeatherIcon(weather.weather_code)} width="64" height="64" /> 
              <h2 className="temp" style={{color: colors.font}}>{weather.temp}°</h2> 
              <h3 className="condition" style={{color: colors.font}}>{nameForDisplay(weather.weather_code)}</h3>
            </div>
            <div className="sun">
              <h3 style={{color: colors.font}}><b>Rise:</b> {weather.sunrise} <b>Set:</b> {weather.sunset}</h3>
            </div>
            <div className="moon"> 
              <img src={selectMoonIcon(weather.moon_phase)} width="64" height="64" /> 
              <h3 className="moonPhase" style={{color: colors.font}}>{nameForDisplay(weather.moon_phase)}</h3>
            </div>
          </div>
        </Form>
      </div>
      
      <img className="citation" src={citation} />
    </div>
    
  );
}

export default App;
