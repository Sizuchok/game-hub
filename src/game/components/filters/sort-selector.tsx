import { Box, Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import { GamesQueryParams, TwoWayGameSortOrder } from '../../../common/types/games.types'

type Props = {
  queryParams: GamesQueryParams
  onSelectOrder: (order: TwoWayGameSortOrder) => void
}

type SortOrder = {
  value: TwoWayGameSortOrder
  label: string
}

const SortSelector = ({ queryParams, onSelectOrder }: Props) => {
  const sortOrders: SortOrder[] = [
    { value: '-created', label: 'Date added' },
    { value: 'name', label: 'Name' },
    { value: '-released', label: 'Release date' },
    { value: '-added', label: 'Popularity' },
    { value: '-rating', label: 'Average rating' },
  ] as const

  const currentOrder = sortOrders.find(({ value }) => value === queryParams.ordering)

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />} fontSize={'sm'} fontWeight={400}>
        {'Sort by: '}
        <Box as="strong">{currentOrder?.label ?? 'Relevance'}</Box>
      </MenuButton>
      <MenuList fontSize={'sm'} fontWeight={400}>
        {sortOrders.map(order => (
          <MenuItem onClick={() => onSelectOrder(order.value)} key={order.value}>
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}
export default SortSelector
