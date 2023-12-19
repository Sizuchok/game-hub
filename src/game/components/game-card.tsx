import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react'
import { Game } from '../../common/types/games.types'
import CriticScore from './critic-score'
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
        <HStack justifyContent="space-between">
          <GamePlatforms platforms={game.parent_platforms.map(({ platform }) => platform)} />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  )
}
export default GameCard
