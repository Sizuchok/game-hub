import { Box, Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import { useShallow } from 'zustand/react/shallow'
import { TwoWayGameSortOrder } from '../../../common/types/games.types'
import { useGameQuery } from '../../../state/game-query-store'

type SortOrder = {
  value: TwoWayGameSortOrder
  label: string
}

const SortSelector = () => {
  const { ordering, setSortOrder } = useGameQuery(
    useShallow(state => ({ ordering: state.gameQuery.ordering, setSortOrder: state.setSortOder })),
  )

  const sortOrders: SortOrder[] = [
    { value: '-created', label: 'Date added' },
    { value: 'name', label: 'Name' },
    { value: '-released', label: 'Release date' },
    { value: '-added', label: 'Popularity' },
    { value: '-rating', label: 'Average rating' },
  ] as const

  const currentOrder = sortOrders.find(({ value }) => value === ordering)

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />} fontSize={'sm'} fontWeight={400}>
        {'Sort by: '}
        <Box as="strong">{currentOrder?.label ?? 'Relevance'}</Box>
      </MenuButton>
      <MenuList fontSize={'sm'} fontWeight={400}>
        {sortOrders.map(order => (
          <MenuItem onClick={() => setSortOrder(order.value)} key={order.value}>
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}
export default SortSelector
