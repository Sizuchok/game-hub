import { HStack, Icon } from '@chakra-ui/react'
import { IconType } from 'react-icons'
import { BsGlobe } from 'react-icons/bs'
import { FaAndroid, FaApple, FaLinux, FaPlaystation, FaWindows, FaXbox } from 'react-icons/fa'
import { MdPhoneIphone } from 'react-icons/md'
import { SiNintendo } from 'react-icons/si'
import { Platform } from '../../common/types/games.types'

type Props = {
  platforms: Platform[]
}

const GamePlatforms = ({ platforms }: Props) => {
  const iconsMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  } as const

  return (
    <HStack marginY={1}>
      {platforms.map(platform => (
        <Icon as={iconsMap[platform.slug]} color={'gray.500'} />
      ))}
    </HStack>
  )
}
export default GamePlatforms
