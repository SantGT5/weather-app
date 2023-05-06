import './HomePage.style.scss'

import React from 'react'

import { useRequestApi } from '../../hooks'
import { Weather } from '../../components'

import type { RootState } from '../../redux/reduxStore'
import { useSelector } from 'react-redux'

const baseURL = (lat?: number, long?: number): string => {
  if (!lat || !long) {
    return `/weather?q=Amsterdam&units=metric&appid=4fc689c1b5fac243121203a6445d5082`
  }

  return `/weather?lat=${lat}&lon=${long}&units=metric&appid=4fc689c1b5fac243121203a6445d5082`
}

export const HomePage = (): JSX.Element => {
  const { latitude, longitude } = useSelector(
    (state: RootState) => state.locationSlice
  )

  const URL = baseURL(latitude, longitude)

  const { _getResponse, errorHandler, isLoading, responseData } =
    useRequestApi(URL)

  React.useEffect(() => {
    const fetch = async () => await _getResponse()
    fetch()
  }, [_getResponse])

  return (
    <div className="wrapper-home">
      {!isLoading && responseData ? (
        <Weather
          temp={responseData.main.temp}
          temp_max={responseData.main.temp_max}
          temp_min={responseData.main.temp_min}
          weather_main={responseData.weather[0].main}
          location_name={responseData.name}
        />
      ) : (
        <>{errorHandler}</>
      )}
    </div>
  )
}
