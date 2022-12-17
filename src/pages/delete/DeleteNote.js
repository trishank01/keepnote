import { Card, CardActions, CardContent, Typography } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import {  DeleteForeverOutlined, DeleteOutline, RestoreFromTrashOutlined } from "@mui/icons-material";
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
const DeleteNote = ({ note }) => {
  const {notes , setNotes  , setDeletedNotes , deletedNotes } = useContext(DataContext)

   const restoreNote = (note) => {
    const updatedNotes =  deletedNotes.filter(data => data.id !== note.id)
    setDeletedNotes(updatedNotes)
    setNotes(preArr => [note , ...preArr])
   }

   const deleteNote = (note) => {
    const updatedNotes =  notes.filter(data => data.id !== note.id)
    setDeletedNotes(updatedNotes)
   }

  return (
    <StyledCard>
      <CardContent>
        <Typography>{note.heading}</Typography>
        <Typography>{note.text}</Typography>
      </CardContent>
      <CardActions>
        <RestoreFromTrashOutlined 
        onClick={() => restoreNote(note)}
        style={{ marginLeft: "auto", cursor: "pointer" }} 
        
        />
        <DeleteForeverOutlined 
        style={{ cursor: "pointer" }} 
        onClick={() => deleteNote(note)}
        />
      </CardActions>
    </StyledCard>
  );
};


export default DeleteNote;
