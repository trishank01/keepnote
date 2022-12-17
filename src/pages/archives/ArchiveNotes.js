import { Box } from "@mui/system";
import React from "react";
import { styled } from "@mui/material/styles";
import { useContext } from "react";
import { Grid } from "@mui/material";
import ArchiveNote from "./ArchiveNote";
import { DataContext } from "../../context/DataProvider";
import EmptyNotes from "../../components/EmptyNotes";

const DrawerHeader = styled("div")(({ theme }) => ({
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));



const ArchiveNotes = () => {
    const {archiveNotes} = useContext(DataContext)
    console.log(archiveNotes)
  return (
    <Box sx={{ display: "flex" }}>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {archiveNotes.length > 0 ?   <Grid container style={{marginTop : "16px"}}>
         {archiveNotes.map(archive => (
            <Grid item>  
            <ArchiveNote note={archive}/>
            </Grid>
         ))}
        </Grid> : <EmptyNotes/>}
      </Box>
    </Box>
  );
};

export default ArchiveNotes;
