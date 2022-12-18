import { Card, CardActions, CardContent, Divider, Typography } from "@mui/material";
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

const StyledCardContent = styled(CardContent)`
  max-height: 380px;
  overflow-y: auto;
`;

const StyleText = styled(Typography)`
  font-weight: 600;
  font-size: 20px;
  font-size: "24px";
`;


const ArchiveNote = ({ note}) => {
  const { setNotes , notes  , archiveNotes , setArchiveNotes , setDeletedNotes , deletedNotes } = useContext(DataContext)

   const UnarchiveNote = (note) => {
    const updatedNotes =  archiveNotes.filter(data => data.id !== note.id)
    setArchiveNotes(updatedNotes)
    setNotes(preArr => [note , ...preArr])
    localStorage.setItem("archive" , JSON.stringify([...updatedNotes]))
    localStorage.setItem("notes" , JSON.stringify([note , ...notes ]))
   }

   const deleteNote = (note) => {
    const updatedNotes =  archiveNotes.filter(data => data.id !== note.id)
    setArchiveNotes(updatedNotes)
    setDeletedNotes(preArr => [note , ...preArr])
    localStorage.setItem("archive" , JSON.stringify([...updatedNotes]))
    localStorage.setItem("delete" , JSON.stringify([note , ...deletedNotes ]))

   }

  return (
    <StyledCard>
      <StyledCardContent>
        <StyleText>{note.heading}</StyleText>
        <Divider style={{ margin: "4px" }} />
        <Typography>{note.text}</Typography>
      </StyledCardContent>
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
