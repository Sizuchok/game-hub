import { Card, CardBody, Heading, Image } from '@chakra-ui/react'
import { Game } from '../../common/types/games.types'
import GamePlatforms from './game-platforms'

type Props = {
  game: Game
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <GamePlatforms platforms={game.parent_platforms.map(({ platform }) => platform)} />
      </CardBody>
    </Card>
  )
}
export default GameCard
