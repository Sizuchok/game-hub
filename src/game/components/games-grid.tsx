import { SimpleGrid } from '@chakra-ui/react'
import { RawgResponse } from '../../common/types/base.types'
import { Game } from '../../common/types/games.types'
import GameCard from './game-card'

type Props = {
  gamePages: RawgResponse<Game>[]
}

const GamesGrid = ({ gamePages }: Props) => {
  return (
    <SimpleGrid
      columns={{
        sm: 1,
        md: 2,
        lg: 3,
        xl: 5,
      }}
      spacing="2rem"
    >
      {gamePages.map(({ results }) => results.map(game => <GameCard game={game} key={game.id} />))}
    </SimpleGrid>
  )
}
export default GamesGrid
