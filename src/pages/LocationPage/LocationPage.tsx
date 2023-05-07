import React from 'react'

import { Weather } from '../../components'
import { useNavigate, useLocation } from 'react-router-dom'

import { useRequestApi } from '../../hooks'

export const LocationPage = () => {
  const navigate = useNavigate()
  const { state } = useLocation()

  const { _getResponse, errorHandler, isLoading, responseData } = useRequestApi(
    `/weather?q=${state.city}&units=metric&appid=4fc689c1b5fac243121203a6445d5082`
  )

  React.useEffect(() => {
    if (errorHandler || !state || state.city === '') navigate('/')
  }, [errorHandler, navigate, state])

  React.useEffect(() => {
    const fetch = async () => await _getResponse()

    fetch()
  }, [_getResponse])

  return (
    <>
      {!isLoading && !errorHandler && responseData ? (
        <Weather
          temp={responseData.main.temp}
          temp_max={responseData.main.temp_max}
          temp_min={responseData.main.temp_min}
          weather_main={responseData.weather[0].main}
          location_name={responseData.name}
          lat={responseData.coord.lat}
          lon={responseData.coord.lon}
          icon={responseData.weather[0].icon}
        />
      ) : (
        <>{errorHandler}</>
      )}
    </>
  )
}
