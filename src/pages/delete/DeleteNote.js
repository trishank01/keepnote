import { Card, CardActions, CardContent, Divider, Typography } from "@mui/material";
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

const StyledCardContent = styled(CardContent)`
  max-height: 380px;
  overflow-y: auto;
`;

const StyleText = styled(Typography)`
  font-weight: 600;
  font-size: 20px;
  font-size: "24px";
`;

const DeleteNote = ({ note }) => {
  const {notes , setNotes  , setDeletedNotes , deletedNotes } = useContext(DataContext)

   const restoreNote = (note) => {
    const updatedNotes =  deletedNotes.filter(data => data.id !== note.id)
    setDeletedNotes(updatedNotes)
    setNotes(preArr => [note , ...preArr])
    localStorage.setItem("notes" , JSON.stringify([note , ...notes]))
    localStorage.setItem("delete" , JSON.stringify(updatedNotes))
   }

   const deleteNote = (note) => {
    const updatedNotes =  deletedNotes.filter(data => data.id !== note.id)
    setDeletedNotes(updatedNotes)
    localStorage.setItem("delete" , JSON.stringify(updatedNotes))
   }

  return (
    <StyledCard>
      <StyledCardContent>
        <StyleText>{note.heading}</StyleText>
        <Divider style={{ margin: "4px" }} />
        <Typography>{note.text}</Typography>
      </StyledCardContent>
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
