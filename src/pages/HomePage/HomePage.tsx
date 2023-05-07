import './HomePage.style.scss'

import { useNavigate } from 'react-router-dom'
import React from 'react'

import { baseURL } from './helper-func'
import { useRequestApi } from '../../hooks'
import { Weather, Input } from '../../components'

// redux
import type { RootState } from '../../redux/reduxStore'
import { useSelector } from 'react-redux'

export const HomePage = (): JSX.Element => {
  const navigate = useNavigate()
  const [{ searchInput }, setSearchInput] = React.useState({ searchInput: '' })

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

  const changeHandler = (evt: React.SyntheticEvent) => {
    const { value, name } = evt.currentTarget as HTMLInputElement

    setSearchInput((current) => {
      return { ...current, [name]: value }
    })
  }

  const submitHandler = (evt: React.SyntheticEvent) => {
    evt.preventDefault()

    if (searchInput === '' || !searchInput) return

    navigate(`/location/${searchInput}`, { state: { city: searchInput } })
  }

  return (
    <form onSubmit={submitHandler} className="wrapper-home">
      <Input onChange={changeHandler} name="searchInput" />
      <button type="submit">Search</button>
      <>
        {!isLoading && !errorHandler && responseData ? (
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
      </>
    </form>
  )
}
