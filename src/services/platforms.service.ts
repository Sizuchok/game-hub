import { RAWG_ENDPOINTS } from '../common/const/app-keys.const'
import { HttpService } from './http.service'

export const platformsService = new HttpService(RAWG_ENDPOINTS.parentPlatforms)
