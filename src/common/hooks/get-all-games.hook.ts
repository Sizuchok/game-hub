import { useInfiniteQuery } from '@tanstack/react-query'
import { gamesService } from '../../services/games.service'
import { QUERY_KEYS_GAMES } from '../const/app-keys.const'
import { RawgResponse } from '../types/base.types'
import { Game } from '../types/games.types'

export const useGetInfiniteGames = () => {
  return useInfiniteQuery({
    queryKey: [QUERY_KEYS_GAMES.getAll],
    queryFn: async ({ pageParam: page = 1 }) =>
      gamesService.getAll<RawgResponse<Game>>({
        params: {
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