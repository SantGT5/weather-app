import { describe, expect, it } from 'vitest'

import { store } from '../../../reduxStore'
import { setFavorite } from '../Favorite'

describe('Favorite', () => {
  it('init state', () => {
    const state = store.getState().favoriteSlice

    expect(state).toEqual({ favorite: [] })
  })

  it('dispatch setFavorite', () => {
    store.dispatch(setFavorite({ favorite: 'London' }))
    store.dispatch(setFavorite({ favorite: 'Amsterdam' }))

    const state = store.getState().favoriteSlice

    expect(state).toEqual({ favorite: ['London', 'Amsterdam'] })
  })
})
