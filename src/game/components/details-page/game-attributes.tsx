import { SimpleGrid, Text } from '@chakra-ui/react'
import { Game } from '../../../common/types/games.types'
import DefinitionItem from '../../../components/util/definition-item'
import CriticScore from '../critic-score'

type Props = {
  game: Game
}

const GameAttributes = ({ game }: Props) => {
  return (
    <SimpleGrid as={'dl'} columns={2} spacingY={5} mt={5}>
      <DefinitionItem title="Platforms">
        {game.parent_platforms?.map(({ platform }) => (
          <Text children={platform.name} key={platform.id} />
        ))}
      </DefinitionItem>
      <DefinitionItem title="Genres">
        {game.genres.map(({ id, name }) => (
          <Text children={name} key={id} />
        ))}
      </DefinitionItem>

      <DefinitionItem title="Publishers">
        {game.publishers.map(({ id, name }) => (
          <Text children={name} key={id} />
        ))}
      </DefinitionItem>
      <DefinitionItem title="Metascore">
        <CriticScore score={game.metacritic} />
      </DefinitionItem>
    </SimpleGrid>
  )
}
export default GameAttributes
