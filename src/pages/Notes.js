import { Box } from '@mui/material'
import React from 'react'
import NoteComponent from '../components/NoteComponent'
import SwiperDrawer from "../components/SwiperDrawer"



const Notes = () => {
  return (
    <Box style={{display : "flex" , width : "100%"}}>
        <SwiperDrawer/>
        <NoteComponent/>
    </Box>
  )
}

export default Notes