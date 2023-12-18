import { RAWG_ENDPOINTS } from '../common/const/app-keys.const'
import { HttpService } from './http.service'

export const gamesService = new HttpService(RAWG_ENDPOINTS.games)
