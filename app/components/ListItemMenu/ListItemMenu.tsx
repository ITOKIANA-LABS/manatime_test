import React from 'react'
import { Collapse, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import Link from 'next/link';

import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { collapseMenu, listItemBlue, listItemDarkBlue, listItemSelected } from '../Sidebar/styles.modules';

interface menusProps {
  text: string,
  href: string,
  icon: any,
  submenus: any[]
}

const ListItemMenu = (props : menusProps) => {
  const { text, href, icon: Icon , submenus = []} = props;
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  }
  return (
    <>
      <ListItem key={href} disablePadding sx={submenus.length === 0 ? listItemBlue : (open ? listItemSelected : listItemDarkBlue)}>
        <ListItemButton component={Link} href={href}  onClick={() => {if(submenus.length > 0) handleClick()} } sx={{height: '66px'}}>
          <ListItemIcon sx={ { color: open && submenus.length > 0 ? '#084693' : '#fff', minWidth: '40px' }}>
            <Icon />
          </ListItemIcon>
          <ListItemText primary={text} primaryTypographyProps={{fontSize: submenus.length > 0 ? '15px' : '18px', fontWeight: '500'}} />
          { submenus.length > 0 ? (
            <>
              {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </>
          ) : (<></>)}
        </ListItemButton>
      </ListItem>
      {
        submenus.length !== 0 && (
          <Collapse in={open} timeout="auto" unmountOnExit sx={collapseMenu}>
            <List component="div" disablePadding>
              {submenus.map(submenu => (
                <ListItemButton key={submenu.href} sx={{ pl: 4 }} component={Link} href={submenu.href} >
                  <ListItemText primary={submenu.text} primaryTypographyProps={{fontSize: '15px', fontWeight: '500', textAlign: 'right'}} />
                </ListItemButton>
              ))}
            </List>
          </Collapse>
        )
      }
    </>
  )
}

export default ListItemMenu