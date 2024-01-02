import { Box, Button, HStack, Heading, Image, List, ListItem } from '@chakra-ui/react'
import SidebarListSkeleton from '../../../components/skeletons/sidebar-list-skeleton'
import { useAllGenres } from '../../hooks/get-all-genres.hook'
import { useGetGenre } from '../../hooks/get-genre.hook'

type Props = {
  currentGenreId: number | undefined
  onGenreChange: (genre: number) => void
}

const Genres = ({ currentGenreId, onGenreChange }: Props) => {
  const { isFetching, data } = useAllGenres()

  const currentGenre = useGetGenre(currentGenreId)

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
                    onClick={() => onGenreChange(genre.id)}
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
