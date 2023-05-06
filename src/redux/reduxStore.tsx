import { configureStore, combineReducers } from '@reduxjs/toolkit'

// redux persist
import { persistReducer, PERSIST } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

// reducers
import locationSlice from './slices/LocationSlice/Location'

const persistConfig = {
  key: 'root',
  version: 1,
  // blacklist: ['locationSlice'], // Slices in this list wont be persisted
  whitelist: ['locationSlice'], // Slices in this list will be persisted
  storage,
}

const rootReducer = combineReducers({ locationSlice })
const persisted = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persisted,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [PERSIST], // or false
      },
    }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
