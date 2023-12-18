import { HStack, Image } from '@chakra-ui/react'
import { PiGameController } from 'react-icons/pi'

const NavBar = () => {
  return (
    <HStack>
      <Image as={PiGameController} boxSize="3rem" />
    </HStack>
  )
}
export default NavBar
