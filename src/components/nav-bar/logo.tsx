import { Link as ChakraLink, Icon } from '@chakra-ui/react'
import { PiGameController } from 'react-icons/pi'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <ChakraLink as={Link} to={'/'} display="flex">
      <Icon as={PiGameController} boxSize={12} />
    </ChakraLink>
  )
}
export default Logo
