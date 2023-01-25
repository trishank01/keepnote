import { Box } from '@mui/material'
import React from 'react'
import NoteComponent from '../components/NoteComponent'
import SwiperDrawer from "../components/SwiperDrawer"
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import ArchiveNotes from './archives/ArchiveNotes'
import DeleteNotes from './delete/DeleteNotes'


const Notes = () => {
  return (
    <Box style={{display : "flex" , width : "100%"}}>
     
      <BrowserRouter>
      <SwiperDrawer/>
        <Routes>
          <Route path="/" element={<NoteComponent/>}/>
          <Route path='/archive' element={<ArchiveNotes/>}/>
          <Route path='/delete' element={<DeleteNotes/>}/>
        </Routes>
        </BrowserRouter>
  </Box>
  )
}

export default Notes