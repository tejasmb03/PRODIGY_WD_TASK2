import React, { useEffect, useState } from 'react'
import Crad from './Crad'
import axios from 'axios';
import { setFunction } from './icons';

function Main() {
  const [city,setCity] = useState(null);
  const [search,setSearch] = useState("mumbai");
  const [icon,seticon] = useState(null);

  console.log(search)

  useEffect(() => {
    async function getWeatherData(){
    let api = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=62c7d366b6f24583f66004a9b4bc7a99`;
    try {
      let response = await fetch(api);
      let datas = await response.json();
      setCity(datas);
      if(datas.name){
          seticon(datas.weather[0].icon)
      }
    } catch (err) {
      console.log("city not found : ", err.message);
    }
  }
  getWeatherData();
  },[search])

  console.log(city);
  return (

    <div>
      <div >
      <h1 className='ear'>Welcome to Weather Project</h1>
      <input className='search' type="Search" placeholder="Search City" 
      onChange={(e) => setSearch(e.target.value)}/>      
      </div>
      
        {
         city?.name?(<Crad search={search}city={city} icon = {setFunction(icon)} />) : <h1>"City not found"</h1>
        }
       
      </div>
      
  ); 
}

export default Main
