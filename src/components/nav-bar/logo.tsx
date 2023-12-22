import { Icon, Link } from '@chakra-ui/react'
import { PiGameController } from 'react-icons/pi'

const Logo = () => {
  return (
    <Link display="flex" href="https://linktr.ee/liiusion" target="_blank">
      <Icon as={PiGameController} boxSize={12} />
    </Link>
  )
}
export default Logo
