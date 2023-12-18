import { HStack, Icon } from '@chakra-ui/react'
import { PiGameController } from 'react-icons/pi'
import ColorModeSwitch from '../switch/color-mode-switch'

const NavBar = () => {
  return (
    <HStack justifyContent={'space-between'} paddingX="1rem">
      <Icon as={PiGameController} boxSize="3rem" />
      <ColorModeSwitch />
    </HStack>
  )
}
export default NavBar
