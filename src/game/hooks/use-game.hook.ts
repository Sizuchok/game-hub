import { useQuery } from '@tanstack/react-query'
import { QUERY_KEYS } from '../../common/const/app-keys.const'
import { http } from '../../services'

export const useGame = (slug: string) => {
  return useQuery({
    queryKey: [QUERY_KEYS.GAMES.GET_ONE, slug],
    queryFn: async () => http.games.get(slug),
  })
}
