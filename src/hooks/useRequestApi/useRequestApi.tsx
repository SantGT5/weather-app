import type { AxiosResponse } from 'axios'
import type { ResponseType } from './type'

import React from 'react'
import { api } from '../../axios'

export const useRequestApi = (query: string) => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const [errorHandler, setErrorHandler] = React.useState<string | null>()
  const [responseData, setResponseData] = React.useState<ResponseType | null>()

  const _getResponse = React.useCallback(async () => {
    try {
      setIsLoading(true)
      const { data }: AxiosResponse<ResponseType> = await api.get(query)

      setErrorHandler(null)
      setResponseData(data)
    } catch (err) {
      setErrorHandler('Something went wrong.')
    } finally {
      setIsLoading(false)
    }
  }, [query])

  return { _getResponse, errorHandler, isLoading, responseData }
}
