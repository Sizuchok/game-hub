import { AxiosRequestConfig } from 'axios'
import { RawgRes } from '../common/types/base.types'
import { apiClient } from './utils/api-client'

export class HttpService<TResponse = unknown> {
  constructor(private endpoint: string) {
    this.endpoint = endpoint
  }

  async getAll(config: AxiosRequestConfig<never>) {
    const response = await apiClient.get<RawgRes<TResponse>>(this.endpoint, config)
    return response.data
  }

  async get(id: string | number, config?: AxiosRequestConfig<never>) {
    const response = await apiClient.get<TResponse>(`${this.endpoint}/${id}`, config)
    return response.data
  }
}
