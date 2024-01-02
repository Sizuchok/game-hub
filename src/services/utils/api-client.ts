import axios from 'axios'
import { RAWG_KEYS } from '../../common/const/app-keys.const'

export const apiClient = axios.create({
  baseURL: RAWG_KEYS.URL,
  params: {
    key: RAWG_KEYS.KEY,
  },
})
