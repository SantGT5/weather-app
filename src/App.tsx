import { Routes, Route } from 'react-router-dom'

import { SideNav } from './components'

import { HomePage } from './pages'

export const App = () => {
  return (
    <div className="wrapper_app">
      <div className="wrapper_pages">
        <SideNav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </div>
    </div>
  )
}
