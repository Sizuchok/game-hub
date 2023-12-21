import { HStack, Icon, Link } from '@chakra-ui/react'
import { PiGameController } from 'react-icons/pi'
import ColorModeSwitch from '../switch/color-mode-switch'

const NavBar = () => {
  return (
    <HStack justifyContent={'space-between'} paddingX={10} paddingY={6}>
      <Link display="flex" href="https://linktr.ee/liiusion" target="_blank">
        <Icon as={PiGameController} boxSize={12} />
      </Link>
      <ColorModeSwitch />
    </HStack>
  )
}
export default NavBar
