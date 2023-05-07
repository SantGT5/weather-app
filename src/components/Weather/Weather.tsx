import './Weather.style.scss'

import React from 'react'

import { IoCloudOutline, IoLocationSharp } from 'react-icons/io5'
import { WeatherType } from './type'

import { Map } from '../index'

export const Weather = ({
  temp,
  temp_max,
  temp_min,
  weather_main,
  location_name,
  icon,
  lat,
  lon,
}: WeatherType): JSX.Element => {
  const weatherFormatter = (weather: number): string => {
    return ('0' + weather.toFixed(0)).slice(-2)
  }

  return (
    <div className="wrapper-weather">
      <div className="temp-content flex gap_10">
        <div className="wght_700">
          <span className="font_size_60">{weatherFormatter(temp)}&deg;</span>
          <div className="font_size_20">
            <span>{weatherFormatter(temp_max)}&deg;</span>/
            <span>{weatherFormatter(temp_min)}&deg;</span>
            <div>
              <span>{weather_main}</span>
            </div>
          </div>
        </div>
        <img
          src={`http://openweathermap.org/img/w/${icon}.png`}
          alt="weather icon"
        />
      </div>
      <div className="location font_size_20 wght_700 flex center">
        {location_name} <IoLocationSharp size={15} />
      </div>
      <Map lat={lat} lon={lon} />
    </div>
  )
}
