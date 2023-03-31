
import { Menu, MenuButton, MenuItem, MenuList, Button } from '@chakra-ui/react'
import { BsChevronDoubleDown } from 'react-icons/bs'


interface Props {
    onSelectedSortOrder: (sortorder: string) => void
    sortOrder: string
}

export const SortSelector = ({onSelectedSortOrder, sortOrder}: Props) => {
    const sortOrders = [
        { value: '', label: 'Relevance'},
        { value: '-added', label: 'Date added'},
        { value: 'name', label: 'Name'},
        { value: '-released', label: 'Release date'},
        { value: '-metacritic', label: 'Popularity'},
        { value: '-rating', label: 'Average rating'},
    ]

    const currentSortOrder = sortOrders.find( order=> order.value === sortOrder)

  return (
    <Menu>
    <MenuButton as={Button} rightIcon={<BsChevronDoubleDown/>}>
        Order by: {currentSortOrder?.label || 'Relevance'}
        </MenuButton>
    <MenuList>
       {sortOrders.map(order => ( 
       <MenuItem onClick={() => onSelectedSortOrder(order.value)} key={order.value} value={order.value}>
        {order.label}
       </MenuItem>
       ))}
    </MenuList>
   </Menu>
  )
}

