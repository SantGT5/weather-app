import './HomePage.style.scss'

import React from 'react'

import { UseRequestApi } from '../../hooks'
import { Weather } from '../../components'

export const HomePage = (): JSX.Element => {
  const { _getResponse, errorHandler, isLoading, responseData } = UseRequestApi(
    `/weather?q=Arnhem&units=metric&appid=4fc689c1b5fac243121203a6445d5082`
  )

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
