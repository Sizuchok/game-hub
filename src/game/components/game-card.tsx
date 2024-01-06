import { Box, CardBody, HStack, Heading, Image, useColorModeValue } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import backgroundPlaceholder from '../../assets/game-backgroud-image-placeholder.jpg'
import { ROUTER_KEYS } from '../../common/const/react-router-keys.const'
import { Game } from '../../common/types/games.types'
import { getCroppedImageUrl } from '../../services/utils/get-croppod-image-url.util'
import CriticScore from './critic-score'
import GamePlatforms from './game-platforms'
import RatingIcon from './rating-icon'
import StyledGameCard from './styled-game-card'

type Props = {
  game: Game
}

const GameCard = ({ game }: Props) => {
  const platforms = game.parent_platforms?.map(({ platform }) => platform)

  const hoverColor = useColorModeValue('blackAlpha.600', 'whiteAlpha.600')

  return (
    <StyledGameCard
      _hover={{
        transform: 'scale(1.02)',
      }}
      transform="scale(1)"
      transition="all .3s"
    >
      <Image
        src={
          game.background_image ? getCroppedImageUrl(game.background_image) : backgroundPlaceholder
        }
      />
      <CardBody>
        <Box position="relative" height="100%">
          <HStack justifyContent="space-between" marginY={1} height={'21px'}>
            <GamePlatforms platforms={platforms} />
            <CriticScore score={game.metacritic} />
          </HStack>
          <Heading
            fontSize="2xl"
            _hover={{
              color: hoverColor,
              transition: 'color .4s',
            }}
          >
            <Link to={`${ROUTER_KEYS.GAMES.GAMES}/${game.slug}`}>{game.name}</Link>
          </Heading>
          <RatingIcon rating={game.rating_top} />
        </Box>
      </CardBody>
    </StyledGameCard>
  )
}
export default GameCard
