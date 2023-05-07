import './SideNav.style.scss'

import { useLocation } from 'react-router-dom'
import React from 'react'

import { Loader } from '../index'

import { IoClose, IoMenu } from 'react-icons/io5'

// Redux
import type { AppDispatch } from '../../redux/reduxStore'
import { useDispatch } from 'react-redux'
import { setLocation } from '../../redux/slices'

import Swal from 'sweetalert2'

export const SideNav = (): JSX.Element => {
  const [loading, setLoading] = React.useState<boolean>(false)
  const dispatch: AppDispatch = useDispatch()
  const location = useLocation()
  const sideNavRef = React.useRef<HTMLDivElement | null>(null)

  const sideNavHandler = (widthSize: string): void => {
    if (!sideNavRef.current) return

    sideNavRef.current.style.width = widthSize
    document.body.style.backgroundColor =
      widthSize === '250px' ? '#00000066' : '#0eaff0'
  }

  const getUserLocation = (): void => {
    setLoading(true)
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords

        dispatch(setLocation({ latitude, longitude }))
        setLoading(false)
      },
      (error) => {
        dispatch(setLocation({ latitude: 0, longitude: 0 }))
        setLoading(false)
        Swal.fire({
          icon: 'error',
          title: error.message,
        })
      }
    )
  }

  return (
    <>
      <div ref={sideNavRef} className="wrapper-sidenav">
        <div className="closeBtn">
          <span className="closeBtn-content">
            Favorites{' '}
            <IoClose
              className="icon-pointer"
              onClick={() => sideNavHandler('0px')}
            />
          </span>
        </div>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
      </div>
      <div className="menu-sidenav flex center">
        <IoMenu
          className="icon-pointer"
          size={36}
          onClick={() => sideNavHandler('250px')}
        />

        {loading ? (
          <Loader />
        ) : !location.state?.city ? (
          <button
            onClick={getUserLocation}
            className="transparent wght_700 font_size_15"
          >
            Get my location
          </button>
        ) : (
          <></>
        )}
      </div>
    </>
  )
}
