import { AxiosRequestConfig } from 'axios'
import { apiClient } from './utils/api-client'

export class HttpService {
  constructor(private endpoint: string) {
    this.endpoint = endpoint
  }

  async getAll<TResponse = unknown>(config: AxiosRequestConfig<never>) {
    const response = await apiClient.get<TResponse>(this.endpoint, config)
    return response.data
  }
}
