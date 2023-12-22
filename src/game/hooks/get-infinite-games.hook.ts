import { useInfiniteQuery } from '@tanstack/react-query'
import { QUERY_KEYS_GAMES } from '../../common/const/app-keys.const'
import { RawgRes } from '../../common/types/base.types'
import { Game, GameQuery, GamesQueryParams } from '../../common/types/games.types'
import { http } from '../../services'

export const useGetInfiniteGames = ({ genre, platform, ...rest }: GameQuery) => {
  const queryParams: GamesQueryParams = {
    ...rest,
    genres: genre?.id,
    parent_platforms: platform?.id,
  }

  return useInfiniteQuery({
    queryKey: [QUERY_KEYS_GAMES.getAll, queryParams],
    queryFn: async ({ pageParam: page = 1 }) =>
      http.games.get<RawgRes<Game>>({
        params: {
          ...queryParams,
          page,
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
