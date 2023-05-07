import { describe, expect, it } from 'vitest'

import { store } from '../../../reduxStore'
import { setLocation } from '../Location'

describe('Location', () => {
  it('init state', () => {
    const state = store.getState().locationSlice

    expect(state).toEqual({ latitude: 0, longitude: 0 })
  })

  it('dispatch setLocation - lat & lon', () => {
    store.dispatch(setLocation({ latitude: 40.7128, longitude: 74.006 }))
    const state = store.getState().locationSlice

    expect(state).toEqual({ latitude: 40.7128, longitude: 74.006 })
  })
})
