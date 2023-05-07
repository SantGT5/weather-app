import { cleanup, render } from '@testing-library/react'
import { afterEach } from 'vitest'

import { BrowserRouter as Router } from 'react-router-dom'

// Redux
import { store } from '../redux/reduxStore'
import { Provider } from 'react-redux'

// Redux Persist
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'

type WrapperProps = {
  children?: React.ReactNode
}

afterEach(() => cleanup())

const persistor = persistStore(store)

const customRender = (ui: React.ReactElement, options = {}) =>
  render(ui, {
    wrapper: ({ children }: WrapperProps) => {
      return (
        <Router>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              {children}
            </PersistGate>
          </Provider>
        </Router>
      )
    },
    ...options,
  })

// eslint-disable-next-line react-refresh/only-export-components
export * from '@testing-library/react'
export { default as userEvent } from '@testing-library/user-event'

export { customRender as render }
