import { useQuery } from '@tanstack/react-query'
import { QUERY_KEYS_PLATFORMS } from '../../common/const/app-keys.const'
import { RawgRes } from '../../common/types/base.types'
import { Platform } from '../../common/types/platform.type'
import { http } from '../../services'

export const useAllPlatforms = () => {
  return useQuery({
    queryKey: [QUERY_KEYS_PLATFORMS.getAll],
    queryFn: async () => http.platforms.get<RawgRes<Platform>>({}),
  })
}
