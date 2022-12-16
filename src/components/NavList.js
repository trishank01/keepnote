import { List, listClasses, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { ArchitectureOutlined, DeleteOutline, LightbulbOutlined } from '@mui/icons-material';
const NavList = ({open}) => {
   const NavMenu = [
    {id : 1 , name : "Notes" , icon : <LightbulbOutlined/>},
    {id : 2 , name : "Archive" , icon : <ArchitectureOutlined/>},
    {id : 3 , name : "Trash" , icon : <DeleteOutline/>},
   ]

  return (
    <List>
          {NavMenu.map((menu, index) => (
            <ListItem key={menu.id} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {menu.icon}
                </ListItemIcon>
                <ListItemText primary={menu.name} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
  )
}

export default NavList