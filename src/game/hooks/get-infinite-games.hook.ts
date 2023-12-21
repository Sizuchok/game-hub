import { useInfiniteQuery } from '@tanstack/react-query'
import { QUERY_KEYS_GAMES } from '../../common/const/app-keys.const'
import { RawgRes } from '../../common/types/base.types'
import { Game, GamesQueryParams } from '../../common/types/games.types'
import { gamesService } from '../../services/games.service'

export const useGetInfiniteGames = (queryParams: GamesQueryParams) => {
  return useInfiniteQuery({
    queryKey: [QUERY_KEYS_GAMES.getAll, queryParams],
    queryFn: async ({ pageParam: page = 1 }) =>
      gamesService.get<RawgRes<Game>>({
        params: {
          page,
          ...queryParams,
        },
      }),
    initialPageParam: 1,
    getNextPageParam: lastPage => {
      if (!lastPage.next) return undefined
      const nextPageNumber = new URLSearchParams(lastPage.next).get('page')
      return +nextPageNumber!
    },
  })
}
