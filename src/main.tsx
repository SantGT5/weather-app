import './styles/_main.scss'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'

// Redux
import { store } from './redux/reduxStore'
import { Provider } from 'react-redux'

// Redux Persist
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'

import { BrowserRouter as Router } from 'react-router-dom'

const persistor = persistStore(store)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </Router>
  </React.StrictMode>
)
