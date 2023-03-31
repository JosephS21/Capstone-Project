import { Button, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import { BsChevronDoubleDown } from 'react-icons/bs'
import { Platform } from '../hooks/useGames'
import usePlatforms from '../hooks/usePlatforms'

interface Props{
  onSelectPlatfrom: (platform: Platform) => void
  selectedPlatform: Platform | null
}

export const PlatformSelector = ({onSelectPlatfrom, selectedPlatform}: Props) => {
    const {data, error} = usePlatforms() 

    if (error) return null
    
  return (
   <Menu>
    <MenuButton as={Button} rightIcon={<BsChevronDoubleDown/>}>{selectedPlatform?.name || 'Platforms'}</MenuButton>
    <MenuList>
       {data.map(platform => <MenuItem onClick={() => onSelectPlatfrom(platform)} key={platform.id}>{platform.name}</MenuItem>)}
    </MenuList>
   </Menu>
  )
}

export default PlatformSelector
