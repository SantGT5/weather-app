import type { AxiosInstance } from 'axios'

import axios from 'axios'

const baseURL = 'https://api.openweathermap.org/data/2.5' as const

const createAPI = (): AxiosInstance => {
  return axios.create({
    baseURL,
  })
}

const api: AxiosInstance = createAPI()

export { api }
