import { Box } from "@mui/system";
import React from "react";
import { styled } from "@mui/material/styles";
import { useContext } from "react";
import { Grid } from "@mui/material";

import DeleteNote from "./DeleteNote";
import { DataContext } from "../../context/DataProvider";
import EmptyNotes from "../../components/EmptyNotes";


const DrawerHeader = styled("div")(({ theme }) => ({
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));



const DeleteNotes = () => {
    const {deletedNotes} = useContext(DataContext)
  return (
    <Box sx={{ display: "flex" }}>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {deletedNotes.length > 0 ?   <Grid container style={{marginTop : "16px"}}>
         {deletedNotes.map(note => (
            <Grid item>  
            <DeleteNote note={note}/>
            </Grid>
         ))}
        </Grid> : <EmptyNotes/>}
      </Box>
    </Box>
  );
};

export default DeleteNotes;
