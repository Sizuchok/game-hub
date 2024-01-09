import { Box } from '@chakra-ui/react'

type Props = {
  image: string
}

const GameBackgroundImage = ({ image }: Props) => {
  return (
    <Box width={'100%'} height={'100%'} position={'absolute'} top={0} left={0} zIndex={-1}>
      <Box
        backgroundSize={'cover'}
        bgRepeat={'no-repeat'}
        height={'700px'}
        width={'100%'}
        backgroundImage={`linear-gradient(rgba(18,18,18,0), rgba(18,18,18,1)), url(${image})`}
        opacity={0.1}
      />
    </Box>
  )
}
export default GameBackgroundImage
