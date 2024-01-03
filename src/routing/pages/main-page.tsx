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
import { useEffect } from 'react'
import { LuMenuSquare } from 'react-icons/lu'
import { LAYOUT_AREAS } from '../../common/theme/layout-areas.const'
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
import { useGameQuery } from '../../state/game-query-store'

export const MainPage = () => {
  const currentGenre = useGameQuery(state => state.gameQuery.genre)

  const { isOpen, onClose, onOpen } = useDisclosure()

  const isMobile = useBreakpointValue({
    base: true,
    lg: false,
  })

  useEffect(() => {
    if (isOpen) {
      onClose()
    }
  }, [currentGenre])

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
          <SearchBar />
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
                    <Genres />
                  </Box>
                </ModalBody>
              </ModalContent>
            </Modal>
          </>
        ) : (
          <Box as="aside" marginLeft={8}>
            <Genres />
          </Box>
        )}
      </GridItem>
      <GridItem area={LAYOUT_AREAS.main}>
        <MainContainer>
          <CurrentFiltersHeading />
          <HStack my={6}>
            <PlatformSelector />
            <SortSelector />
          </HStack>
          <GamesGrid />
        </MainContainer>
      </GridItem>
    </Grid>
  )
}
