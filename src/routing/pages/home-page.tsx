import { Box, HStack } from '@chakra-ui/react'
import { MAX_WIDTH } from '../../common/theme/sizing.const'
import CurrentFiltersHeading from '../../game/components/filters/current-filters-heading'
import SortSelector from '../../game/components/filters/sort-selector'
import GamesGrid from '../../game/components/games-grid'
import PlatformSelector from '../../platforms/components/platform-selector'

const HomePage = () => {
  return (
    <Box maxWidth={MAX_WIDTH} marginX="auto">
      <Box
        marginX={{
          base: 3,
          sm: 8,
        }}
      >
        <CurrentFiltersHeading />
        <HStack my={6}>
          <PlatformSelector />
          <SortSelector />
        </HStack>
        <GamesGrid />
      </Box>
    </Box>
  )
}
export default HomePage
