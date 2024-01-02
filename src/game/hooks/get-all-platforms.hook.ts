import { useQuery } from '@tanstack/react-query'
import { QUERY_KEYS_PLATFORMS } from '../../common/const/app-keys.const'
import { http } from '../../services'

export const useAllPlatforms = () => {
  return useQuery({
    queryKey: [QUERY_KEYS_PLATFORMS.getAll],
    queryFn: async () => http.platforms.get({}),
  })
}
