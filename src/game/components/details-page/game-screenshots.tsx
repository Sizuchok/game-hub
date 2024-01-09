import { Image, SimpleGrid } from '@chakra-ui/react'
import { useGameScreenshots } from '../../hooks/use-game-screenshots.hook'

type Props = {
  id: number
}

const GameScreenshots = ({ id }: Props) => {
  const { data, error } = useGameScreenshots(id)
  const screenshots = data?.results ?? []

  if (error) {
    throw error
  }

  return (
    <SimpleGrid
      columns={{
        lg: 2,
      }}
      spacing={4}
      mt={10}
    >
      {screenshots.map(({ id, image }) => (
        <Image src={image} borderRadius={'md'} key={id} />
      ))}
    </SimpleGrid>
  )
}
export default GameScreenshots
