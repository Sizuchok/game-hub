import { Box, Button, HStack, Heading, Image, List, ListItem } from '@chakra-ui/react'
import { useShallow } from 'zustand/react/shallow'
import { useAllGenres } from '../../genres/hooks/get-all-genres.hook'
import { useCachedGenre } from '../../genres/hooks/get-genre.hook'
import { useGameQuery } from '../../state/game-query-store'
import SidebarListSkeleton from '../skeletons/sidebar-list-skeleton'

const Genres = () => {
  const { currentGenreId, setGenreId } = useGameQuery(
    useShallow(state => ({ currentGenreId: state.gameQuery.genre, setGenreId: state.setGenreId })),
  )
  const { isFetching, data } = useAllGenres()

  const currentGenre = useCachedGenre(currentGenreId)

  const skeletons = new Array(10).fill('')
  const genres = data?.results ?? []

  return (
    <Box>
      <Heading fontSize="2xl">Genres</Heading>
      <List
        marginTop={4}
        sx={{
          '& > * + *': {
            marginTop: 2,
          },
        }}
      >
        {isFetching
          ? skeletons.map((_, index) => <SidebarListSkeleton key={index} />)
          : genres.map(genre => (
              <ListItem key={genre.id}>
                <HStack>
                  <Image
                    src={genre.image_background}
                    boxSize={8}
                    objectFit="cover"
                    borderRadius="md"
                  />
                  <Button
                    variant="link"
                    onClick={() => setGenreId(genre.id)}
                    justifyContent="start"
                  >
                    <Box
                      as="span"
                      overflow="hidden"
                      textOverflow="ellipsis"
                      fontWeight={currentGenre?.id === genre.id ? 700 : 400}
                    >
                      {genre.name}
                    </Box>
                  </Button>
                </HStack>
              </ListItem>
            ))}
      </List>
    </Box>
  )
}
export default Genres
