import {
  Box,
  Grid,
  GridItem,
  HStack,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { LuMenuSquare } from 'react-icons/lu'
import { LAYOUT_AREAS } from '../../common/theme/layout-areas.const'
import { GameQuery, TwoWayGameSortOrder } from '../../common/types/games.types'
import MainContainer from '../../components/layout/main-container'
import NavBarContainer from '../../components/layout/nav-bar-container'
import Logo from '../../components/nav-bar/logo'
import ColorModeSwitch from '../../components/switch/color-mode-switch'
import CurrentFiltersHeading from '../../game/components/filters/current-filters-heading'
import SearchBar from '../../game/components/filters/search-bar'
import SortSelector from '../../game/components/filters/sort-selector'
import GamesGrid from '../../game/components/games-grid'
import Genres from '../../genres/components/sidebar/genres'
import PlatformSelector from '../../platforms/components/platform-selector'

export const MainPage = () => {
  const { isOpen, onClose, onOpen } = useDisclosure()

  const isMobile = useBreakpointValue({
    base: true,
    lg: false,
  })

  const [gameQuery, setGameQuery] = useState<GameQuery>({
    ordering: '-added',
  })

  const handleGenreChange = (genre: number) => {
    setGameQuery({
      ...gameQuery,
      genre,
    })
  }

  const handlePlatformSelect = (platform: number) => {
    setGameQuery({
      ...gameQuery,
      platform,
    })
  }

  const handleSortOrderSelect = (order: TwoWayGameSortOrder) => {
    setGameQuery({
      ...gameQuery,
      ordering: order,
      search: null,
    })
  }

  const handleSearch = (search: string) => {
    setGameQuery({
      ...gameQuery,
      search,
      ordering: null,
    })
  }

  useEffect(() => {
    if (isOpen) {
      onClose()
    }
  }, [gameQuery.genre])

  return (
    <Grid
      gridTemplateAreas={{
        base: `"${LAYOUT_AREAS.nav}" "${LAYOUT_AREAS.main}"`,
        lg: `"${LAYOUT_AREAS.nav} ${LAYOUT_AREAS.nav}" "${LAYOUT_AREAS.aside} ${LAYOUT_AREAS.main}"`,
      }}
      gridTemplateColumns={{
        base: '1fr',
        lg: '200px 1fr',
      }}
      position={'relative'}
      pb={8}
    >
      <GridItem area={LAYOUT_AREAS.nav}>
        <NavBarContainer>
          <Logo />
          <SearchBar gameQuery={gameQuery} onSearch={handleSearch} />
          <ColorModeSwitch />
        </NavBarContainer>
      </GridItem>
      <GridItem area={LAYOUT_AREAS.aside}>
        {isMobile ? (
          <>
            <IconButton
              isRound
              variant="solid"
              icon={<LuMenuSquare />}
              boxSize="3.3rem"
              aria-label="Sidebar"
              colorScheme="green"
              fontSize="2xl"
              position="fixed"
              bottom={10}
              right={10}
              zIndex={999}
              onClick={onOpen}
            />
            <Modal isOpen={isOpen} onClose={onClose} size="full">
              <ModalOverlay />
              <ModalContent>
                <ModalCloseButton />
                <ModalBody>
                  <Box as="aside">
                    <Genres currentGenreId={gameQuery.genre} onGenreChange={handleGenreChange} />
                  </Box>
                </ModalBody>
              </ModalContent>
            </Modal>
          </>
        ) : (
          <Box as="aside" marginLeft={8}>
            <Genres currentGenreId={gameQuery.genre} onGenreChange={handleGenreChange} />
          </Box>
        )}
      </GridItem>
      <GridItem area={LAYOUT_AREAS.main}>
        <MainContainer>
          <CurrentFiltersHeading gameQuery={gameQuery} />
          <HStack my={6}>
            <PlatformSelector
              currentPlatformId={gameQuery.platform}
              onSelectPlatform={handlePlatformSelect}
            />
            <SortSelector gameQuery={gameQuery} onSelectOrder={handleSortOrderSelect} />
          </HStack>
          <GamesGrid gameQuery={gameQuery} />
        </MainContainer>
      </GridItem>
    </Grid>
  )
}
