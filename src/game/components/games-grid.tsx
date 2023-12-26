import { SimpleGrid } from '@chakra-ui/react'
import { GameQuery } from '../../common/types/games.types'
import { useGetInfiniteGames } from '../hooks/get-infinite-games.hook'
import GameCard from './game-card'
import GameCardSkeleton from './game-card-skeleton'

type Props = {
  gameQuery: GameQuery
}

const GamesGrid = ({ gameQuery }: Props) => {
  const { data, isFetching } = useGetInfiniteGames(gameQuery)
  const games = data?.pages.flatMap(page => page.results) ?? []
  const skeletons = new Array(15).fill('')

  return (
    <SimpleGrid
      columns={{
        sm: 1,
        md: 2,
        lg: 3,
        xl: 4,
        '2xl': 5,
      }}
      spacing={6}
    >
      {games.map(game => (
        <GameCard game={game} key={game.id} />
      ))}

      {isFetching && skeletons.map((_, index) => <GameCardSkeleton key={index} />)}
    </SimpleGrid>
  )
}
export default GamesGrid
