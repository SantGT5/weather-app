import React from 'react'

const HomePage = React.lazy(() =>
  import('./HomePage/HomePage').then(({ HomePage }) => {
    return { default: HomePage }
  })
)

const LocationPage = React.lazy(() =>
  import('./LocationPage/LocationPage').then(({ LocationPage }) => {
    return { default: LocationPage }
  })
)

export { HomePage, LocationPage }
