import './HomePage.style.scss'

import React from 'react'

import { UseRequestApi } from '../../hooks'
import { IoCloudOutline, IoLocationSharp } from 'react-icons/io5'

export const HomePage = (): JSX.Element => {
  const { _getResponse, errorHandler, isLoading, responseData } = UseRequestApi(
    `/weather?q=Arnhem&units=metric&appid=4fc689c1b5fac243121203a6445d5082`
  )

  React.useEffect(() => {
    const fetch = async () => await _getResponse()
    fetch()
  }, [])

  return (
    <div className="wrapper-home">
      {!isLoading && responseData ? (
        <>
          <div className="temp-content gap_10">
            <div className="wght_700">
              <span className="font_size_60">
                {('0' + responseData.main.temp.toFixed(0)).slice(-2)}&deg;
              </span>
              <div className="font_size_20">
                <span>
                  {('0' + responseData.main.temp_max.toFixed(0)).slice(-2)}&deg;
                </span>
                /
                <span>
                  {('0' + responseData.main.temp_min.toFixed(0)).slice(-2)}&deg;
                </span>
                <div>
                  <span>{responseData.weather[0].main}</span>
                </div>
              </div>
            </div>
            <IoCloudOutline size={70} style={{ minWidth: '70px' }} />
          </div>
          <div className="location font_size_20 wght_700 flex center">
            {responseData.name} <IoLocationSharp size={15} />
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  )
}
