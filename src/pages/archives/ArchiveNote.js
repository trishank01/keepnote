import { Card, CardActions, CardContent, Typography } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import { UnarchiveOutlined, DeleteOutline } from "@mui/icons-material";
import { useContext } from "react";
import { DataContext } from "../../context/DataProvider";

const StyledCard = styled(Card)`
  width: 240px;
  gap: 10px;
  margin: 8px;
  box-shadow: none;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
`;


const ArchiveNote = ({ note}) => {
  const { setNotes  , archiveNotes , setArchiveNotes , setDeletedNotes } = useContext(DataContext)

   const UnarchiveNote = (note) => {
    const updatedNotes =  archiveNotes.filter(data => data.id !== note.id)
    setArchiveNotes(updatedNotes)
    setNotes(preArr => [note , ...preArr])
   }

   const deleteNote = (note) => {
    const updatedNotes =  archiveNotes.filter(data => data.id !== note.id)
    setArchiveNotes(updatedNotes)
    setDeletedNotes(preArr => [note , ...preArr])

   }

  return (
    <StyledCard>
      <CardContent>
        <Typography>{note.heading}</Typography>
        <Typography>{note.text}</Typography>
      </CardContent>
      <CardActions>
        <UnarchiveOutlined 
        onClick={() => UnarchiveNote(note)}
        style={{ marginLeft: "auto", cursor: "pointer" }} 
        
        />
        <DeleteOutline 
        style={{ cursor: "pointer" }} 
        onClick={() => deleteNote(note)}
        
        />
      </CardActions>
    </StyledCard>
  );
};

//   <p>{map.heading}</p>
//<p>{map.text}</p>
export default ArchiveNote;
