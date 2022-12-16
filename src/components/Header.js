import {  AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/material/styles';
import logo from "./assests/logo.png"

const HeaderBox = styled(AppBar)`
  z-index: 1201;
  background: #fff;
  height: 70px;
  box-shadow: inset 0 -1px 0 0 #dadce0;
`

const Heading = styled(Typography)`
    color : "#5F6368";
    font-size: 24px;
    margin-left: 25px;  
`


const Header = ({open , handleDrawer }) => {
  
  return (
    <HeaderBox  open={open}>
        <Toolbar>
          <IconButton
            onClick={handleDrawer}
            edge="start"
            sx={{marginRight: 5}}>
            <MenuIcon />
          </IconButton>
          <img src={logo} alt='logo'/>
          <Heading> Mini variant drawer</Heading>
        </Toolbar>
      </HeaderBox>
  )
}

export default Header