import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import { GamesQueryParams } from '../../../common/types/games.types'
import { useAllPlatforms } from '../../hooks/get-all-platforms.hook'

type Props = {
  queryParams: GamesQueryParams
  onSelectPlatform: (platform: number) => void
}

const PlatformSelector = ({ queryParams, onSelectPlatform }: Props) => {
  const { data, isError } = useAllPlatforms()
  const platforms = data?.results ?? []

  const currentPlatform = platforms.find(({ id }) => id === Number(queryParams.parent_platforms))

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
