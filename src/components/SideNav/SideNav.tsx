import './SideNav.style.scss'

import { Link, useLocation, useNavigate } from 'react-router-dom'
import React from 'react'

import { Loader } from '../index'

import { IoClose, IoMenu, IoHomeOutline, IoStarOutline } from 'react-icons/io5'

// Redux
import type { AppDispatch, RootState } from '../../redux/reduxStore'
import { useDispatch, useSelector } from 'react-redux'
import { setLocation, setFavorite } from '../../redux/slices'

import Swal from 'sweetalert2'

export const SideNav = (): JSX.Element => {
  const { favorite } = useSelector((state: RootState) => state.favoriteSlice)

  const [loading, setLoading] = React.useState<boolean>(false)
  const dispatch: AppDispatch = useDispatch()
  const location = useLocation()
  const navigate = useNavigate()
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

  const backHomeHandler = () => navigate('/')

  const favoriteHandler = () => {
    dispatch(setFavorite({ favorite: location.state.city }))
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
        {favorite.map((elem, i) => {
          return (
            <Link
              state={{ city: elem }}
              to={`location/${elem}`}
              className="transparent wght_700 font_size_15"
              onClick={() => sideNavHandler('0px')}
              key={i}
            >
              {elem}
            </Link>
          )
        })}
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
          <div className="gap_10 flex">
            <IoHomeOutline
              className="icon-pointer"
              size={36}
              onClick={backHomeHandler}
            />
            <IoStarOutline
              color={
                favorite.includes(location.state.city) ? 'yellow' : 'black'
              }
              className="icon-pointer"
              size={36}
              onClick={favoriteHandler}
            />
          </div>
        )}
      </div>
    </>
  )
}
