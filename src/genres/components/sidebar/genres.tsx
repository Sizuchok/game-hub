import { Box, Button, HStack, Heading, Image, List, ListItem } from '@chakra-ui/react'
import SidebarListSkeleton from '../../../components/skeletons/sidebar-list-skeleton'
import { useAllGenres } from '../../hooks/get-all-genres.hook'

type Props = {
  handleGenreChange: (genres: string) => void
}

const Genres = ({ handleGenreChange }: Props) => {
  const { isFetching, data } = useAllGenres()

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
                  <Button variant="link" onClick={() => handleGenreChange(genre.slug)}>
                    <Box as="span" overflow="hidden" textOverflow="ellipsis" fontWeight={400}>
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
