import { useQuery } from '@tanstack/react-query'
import { QUERY_KEYS, RAWG_ENDPOINTS } from '../../common/const/app-keys.const'
import { RawgRes } from '../../common/types/base.types'
import { Trailer } from '../../common/types/trailer.types'
import { http } from '../../services'

export const useGameTrailers = (id: number) => {
  return useQuery({
    queryKey: [QUERY_KEYS.GAMES.GET_TRAILER, id],
    queryFn: async () => http.games.get<RawgRes<Trailer>>(RAWG_ENDPOINTS.GET_GAME_TRAILERS(id)),
  })
}
