import { Box } from "@mui/system";
import React from "react";
import { styled } from "@mui/material/styles";
import { useContext } from "react";
import From from "./Form";
import NoteList from "./NoteList";
import { DataContext } from "../context/DataProvider";
import { Grid } from "@mui/material";
import Form from "./Form";
import EmptyNotes from "./EmptyNotes";
const DrawerHeader = styled("div")(({ theme }) => ({
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));



const NoteComponent = () => {
    const {notes} = useContext(DataContext)
  return (
    <Box sx={{ display: "flex" }}>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Form />
        {notes.length > 0 ?   <Grid container style={{marginTop : "16px"}}>
         {notes.map(note => (
            <Grid item>  
            <NoteList note={note}/>
            </Grid>
         ))}
        </Grid> : <EmptyNotes/>}
      </Box>
    </Box>
  );
};

export default NoteComponent;
