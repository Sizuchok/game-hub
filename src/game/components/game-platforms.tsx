import { HStack, Icon } from '@chakra-ui/react'
import { IconType } from 'react-icons'
import { BsApple, BsGlobe } from 'react-icons/bs'
import { FaLinux, FaPlaystation, FaQuestionCircle, FaWindows, FaXbox } from 'react-icons/fa'
import { MdPhoneIphone } from 'react-icons/md'
import { SiNintendoswitch } from 'react-icons/si'
import { TfiAndroid } from 'react-icons/tfi'
import { Platform } from '../../common/types/platform.type'

type Props = {
  platforms: Platform[]
}

type IconsMap = {
  [key: string]: IconType
}

const GamePlatforms = ({ platforms }: Props) => {
  const iconsMap: IconsMap = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendoswitch,
    mac: BsApple,
    linux: FaLinux,
    android: TfiAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  } as const

  return (
    <HStack
      overflow="hidden"
      textOverflow="ellipsis"
      whiteSpace="nowrap"
      display="inline-block"
      sx={{
        '& > * + *': {
          marginLeft: 2,
        },
      }}
    >
      {platforms.map(platform => (
        <Icon
          as={iconsMap[platform.slug] ?? FaQuestionCircle}
          color={'gray.400'}
          key={platform.id}
        />
      ))}
    </HStack>
  )
}
export default GamePlatforms
