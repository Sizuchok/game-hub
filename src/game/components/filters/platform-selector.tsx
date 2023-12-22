import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import { Platform } from '../../../common/types/platform.type'
import { useAllPlatforms } from '../../hooks/get-all-platforms.hook'

type Props = {
  currentPlatform?: Platform
  onSelectPlatform: (platform: Platform) => void
}

const PlatformSelector = ({ currentPlatform, onSelectPlatform }: Props) => {
  const { data, isError } = useAllPlatforms()
  const platforms = data?.results ?? []

  if (isError) return null

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />} fontSize={'sm'}>
        {currentPlatform?.name ?? 'Platforms'}
      </MenuButton>
      <MenuList fontSize={'sm'} fontWeight={400}>
        {platforms.map(platform => (
          <MenuItem onClick={() => onSelectPlatform(platform)} key={platform.id}>
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}
export default PlatformSelector
