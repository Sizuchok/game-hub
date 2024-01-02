import { useQuery } from '@tanstack/react-query'
import { QUERY_KEYS } from '../../common/const/app-keys.const'
import { http } from '../../services'

export const useAllPlatforms = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.PLATFORMS.GET_ALL],
    queryFn: async () => http.platforms.get({}),
  })
}
