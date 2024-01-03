import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import { useShallow } from 'zustand/react/shallow'
import { useGameQuery } from '../../state/game-query-store'
import { useAllPlatforms } from '../hooks/get-all-platforms.hook'
import { useGetPlatform } from '../hooks/get-platform.hook'

const PlatformSelector = () => {
  const { currentPlatformId, setPlatfromId } = useGameQuery(
    useShallow(state => ({
      currentPlatformId: state.gameQuery.platform,
      setPlatfromId: state.setPlatformId,
    })),
  )

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
          <MenuItem onClick={() => setPlatfromId(platform.id)} key={platform.id}>
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}
export default PlatformSelector
