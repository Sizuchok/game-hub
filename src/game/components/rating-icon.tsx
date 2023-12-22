import { Box, Image, ImageProps } from '@chakra-ui/react'
import exceptional from '../../assets/rating_icons/exceptional.png'
import meh from '../../assets/rating_icons/meh.webp'
import recommended from '../../assets/rating_icons/recommended.png'
import skip from '../../assets/rating_icons/skip.png'
import { Game } from '../../common/types/games.types'

type Props = {
  rating: Game['rating_top']
}

type EmojiMap = { [key: number]: ImageProps }

const RatingIcon = ({ rating }: Props) => {
  if (!rating) return null

  const emojisMap: EmojiMap = {
    1: { src: skip, alt: 'skip' },
    3: { src: meh, alt: 'meh' },
    4: { src: recommended, alt: 'recommended' },
    5: { src: exceptional, alt: 'exceptional', boxSize: 8 },
  } as const

  return (
    <Box h={6}>
      <Image boxSize={6} {...emojisMap[rating]} position={'absolute'} bottom={0} right={0} />
    </Box>
  )
}

export default RatingIcon
