import { createSlice } from '@reduxjs/toolkit'

export type FavoriteType = { favorite: string[] }

type payloadType = { payload: { favorite: string } }

const initialState: FavoriteType = { favorite: [] }

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    setFavorite: (state, { payload }: payloadType) => {
      const { favorite } = payload
      const updatedFavoriteList = [...state.favorite]

      if (!updatedFavoriteList.includes(favorite)) {
        updatedFavoriteList.push(favorite)
      } else {
        const index = updatedFavoriteList.indexOf(favorite)
        updatedFavoriteList.splice(index, 1)
      }

      return { favorite: updatedFavoriteList }
    },
  },
})

export const { setFavorite } = favoriteSlice.actions

export default favoriteSlice.reducer
