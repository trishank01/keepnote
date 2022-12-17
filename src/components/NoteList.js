import {
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Popover,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import {
  ArchiveOutlined,
  BorderColorOutlined,
  ColorLensOutlined,
  DeleteOutline,
} from "@mui/icons-material";
import { useContext } from "react";
import { DataContext } from "../context/DataProvider";
import { Box } from "@mui/system";


const StyledCard = styled(Card)`
  width: 260px;
  gap: 10px;
  margin: 8px;
  box-shadow: none;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 8px;
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

const StyledBox = styled(Box)`

   width: 35px;
   height: 35px;
   border-radius: 50%;
   margin: 5px;
   border: 2px solid #000;
   cursor: pointer;
`




const NoteList = ({ note }) => {
  const { notes, setNotes, setArchiveNotes, setDeletedNotes } =
    useContext(DataContext);

  const archiveNote = (note) => {
    const updatedNotes = notes.filter((data) => data.id !== note.id);
    setNotes(updatedNotes);
    setArchiveNotes((preArr) => [note, ...preArr]);
  };

  const deleteNote = (note) => {
    const updatedNotes = notes.filter((data) => data.id !== note.id);
    setNotes(updatedNotes);
    setDeletedNotes((preArr) => [note, ...preArr]);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const [bgColor , setBgColor] = useState(["#FDCFE8" , "#F28B82" , "#FBBC04" , "#FFF475" , "#CCFF90"])
  const [bgCardColor , setBgCardColor] = useState("")

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleBgColorChange = (color) => {
    setBgCardColor(color)
  }

  return (
    <StyledCard style={{backgroundColor: bgCardColor}}>
      <StyledCardContent>
        <StyleText>{note.heading}</StyleText>
        <Divider style={{ margin: "4px" }} />
        <Typography>{note.text}</Typography>
      </StyledCardContent>
      <CardActions>
        <ColorLensOutlined
          aria-describedby={id}
          variant="contained"
          onClick={handleClick}
          style={{ marginLeft: "auto", cursor: "pointer" }}
        />
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
         
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          <div style={{display : 'flex'}}>
           {bgColor.map((color)=> ( 
          <StyledBox 
          style={{backgroundColor:color}}
          onClick={() => handleBgColorChange(color)}
          />
          ))}
          </div>
      
          
        </Popover>
        <BorderColorOutlined   style={{ cursor: "pointer" }}/>
        <ArchiveOutlined onClick={() => archiveNote(note)}   style={{ cursor: "pointer" }}/>
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
