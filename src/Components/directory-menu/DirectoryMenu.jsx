import { useSelector } from 'react-redux';
import {directory} from '../../features/directory-menu/DirectorySlice'
import './DirectoryMenu.scss'
import MenuItem from '../menu-item/MenuItem';
const DirectoryMenu = () => {

  const sections = useSelector(directory || [])




  return (
    <div className="directory-menu">
        {
            sections.map(({id, ...otherSectionProps}) => (
                <MenuItem key={id} {...otherSectionProps} />
            ))
        }
      
    </div>
  )
}

export default DirectoryMenu
