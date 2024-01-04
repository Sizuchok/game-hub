import { RAWG_ENDPOINTS } from '../common/const/app-keys.const'
import { Platform } from '../common/types/platform.type'
import { HttpService } from './http.service'

export const platformsService = new HttpService<Platform>(RAWG_ENDPOINTS.PARENT_PLATFORMS)
