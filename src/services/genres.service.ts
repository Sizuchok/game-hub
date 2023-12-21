import { RAWG_ENDPOINTS } from '../common/const/app-keys.const'
import { HttpService } from './http.service'

export const genresService = new HttpService(RAWG_ENDPOINTS.genres)
