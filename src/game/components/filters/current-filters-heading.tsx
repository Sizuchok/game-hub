import { Heading } from '@chakra-ui/react'
import { GameQuery } from '../../../common/types/games.types'

type Props = {
  gameQuery: GameQuery
}

const CurrentFiltersHeading = ({ gameQuery }: Props) => {
  const platform = gameQuery.platform
  const genre = gameQuery.genre

  const heading = `${platform?.name ?? ''} ${genre?.name ?? ''} Games`

  return (
    <Heading as="h1" fontSize="7xl">
      {heading}
    </Heading>
  )
}
export default CurrentFiltersHeading
