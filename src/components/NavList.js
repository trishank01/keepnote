import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import {
  ArchitectureOutlined,
  DeleteOutline,
  LightbulbOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
const NavList = ({ open }) => {
  const NavMenu = [
    { id: 1, name: "Notes", icon: <LightbulbOutlined /> , route : "/"},
    { id: 2, name: "Archive", icon: <ArchitectureOutlined />  , route : "/archive"},
    { id: 3, name: "Trash", icon: <DeleteOutline />, route : "/delete"},
  ];

  return (
    <List>
      {NavMenu.map((menu) => (
        <ListItem key={menu.id} disablePadding sx={{ display: "block" }}>
          <Link to={menu.route} style={{textDecoration: "none" , display : "flex" , color : "inherit"}}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              {menu.icon}
            </ListItemIcon>
            <ListItemText primary={menu.name} sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
          </Link>
        </ListItem>
      ))}
    </List>
  );
};

export default NavList;
