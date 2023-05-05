import './SideNav.style.scss'
import React from 'react'

import { IoClose, IoMenu } from 'react-icons/io5'

export const SideNav = (): JSX.Element => {
  const sideNavRef = React.useRef<HTMLDivElement | null>(null)

  const sideNavHandler = (widthSize: string): void => {
    if (!sideNavRef.current) return

    sideNavRef.current.style.width = widthSize
    document.body.style.backgroundColor =
      widthSize === '250px' ? '#00000066' : '#0eaff0'
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
      <IoMenu
        className="icon-pointer"
        size={36}
        onClick={() => sideNavHandler('250px')}
      />
    </>
  )
}
