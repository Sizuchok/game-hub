import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import { useAllPlatforms } from '../hooks/get-all-platforms.hook'
import { useGetPlatform } from '../hooks/get-platform.hook'

type Props = {
  currentPlatformId: number | undefined
  onSelectPlatform: (platform: number) => void
}

const PlatformSelector = ({ currentPlatformId, onSelectPlatform }: Props) => {
  const { data, isError } = useAllPlatforms()
  const platforms = data?.results ?? []

  const currentPlatform = useGetPlatform(currentPlatformId)

  if (isError) return null

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />} fontSize={'sm'}>
        {currentPlatform?.name ?? 'Platforms'}
      </MenuButton>
      <MenuList fontSize={'sm'} fontWeight={400}>
        {platforms.map(platform => (
          <MenuItem onClick={() => onSelectPlatform(platform.id)} key={platform.id}>
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}
export default PlatformSelector
