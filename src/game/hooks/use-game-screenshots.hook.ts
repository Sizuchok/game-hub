import { useQuery } from '@tanstack/react-query'
import { QUERY_KEYS, RAWG_ENDPOINTS } from '../../common/const/app-keys.const'
import { http } from '../../services'
import { RawgRes } from '../../common/types/base.types'
import { Screenshot } from '../../common/types/screenshot.types'

export const useGameScreenshots = (id: number) => {
  return useQuery({
    queryKey: [QUERY_KEYS.GAMES.GET_SCREENSHOTS, id],
    queryFn: async () =>
      http.games.get<RawgRes<Screenshot>>(RAWG_ENDPOINTS.GET_GAME_SCREENSHOTS(id)),
  })
}
