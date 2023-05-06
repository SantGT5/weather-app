import { createSlice } from '@reduxjs/toolkit'

export type LocationType = { latitude: number; longitude: number }

type payloadType = { payload: LocationType }

const initialState: LocationType = { latitude: 0, longitude: 0 }

export const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setLocation: (state, { payload }: payloadType) => {
      const { latitude, longitude } = payload
      return { ...state, latitude, longitude }
    },
  },
})

export const { setLocation } = locationSlice.actions

export default locationSlice.reducer
