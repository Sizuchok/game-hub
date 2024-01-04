import {
  Box,
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
import { useGameQuery } from '../../state/game-query-store'
import Genres from './genres'

const Sidebar = () => {
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
    <>
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
    </>
  )
}
export default Sidebar
