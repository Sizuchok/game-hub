import { HStack } from '@chakra-ui/react'
import ColorModeSwitch from '../switch/color-mode-switch'
import Logo from './logo'
import SearchBar from './search-bar'

const NavBar = () => {
  return (
    <HStack
      paddingX={{
        base: 3,
        sm: 10,
      }}
      paddingY={6}
      spacing={{
        base: 4,
        sm: 8,
      }}
    >
      <Logo />
      <SearchBar />
      <ColorModeSwitch />
    </HStack>
  )
}
export default NavBar
