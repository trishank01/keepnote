import { Card, CardActions, CardContent, Typography } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import { ArchiveOutlined, DeleteOutline } from "@mui/icons-material";
import { useContext } from "react";
import { DataContext } from "../context/DataProvider";

const StyledCard = styled(Card)`
  width: 240px;
  gap: 10px;
  margin: 8px;
  box-shadow: none;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
`;
const NoteList = ({ note }) => {
  const {notes , setNotes  , setArchiveNote , setDeletedNote } = useContext(DataContext)

   const archiveNote = (note) => {
    const updatedNotes =  notes.filter(data => data.id !== note.id)
    setNotes(updatedNotes)
    setArchiveNote(preArr => [note , ...preArr])
   }

   const deleteNote = (note) => {
    const updatedNotes =  notes.filter(data => data.id !== note.id)
    setNotes(updatedNotes)
    setDeletedNote(preArr => [note , ...preArr])

   }

  return (
    <StyledCard>
      <CardContent>
        <Typography>{note.heading}</Typography>
        <Typography>{note.text}</Typography>
      </CardContent>
      <CardActions>
        <ArchiveOutlined 
        onClick={() => archiveNote(note)}
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
export default NoteList;
