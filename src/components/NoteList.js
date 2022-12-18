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
import ModalBox from "./Modal";

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
`;



const NoteList = ({ note, index }) => {
  const {
    notes,
    setNotes,
    setArchiveNotes,
    setDeletedNotes,
    archiveNotes,
    deletedNotes,
  } = useContext(DataContext);

  const archiveNote = (note) => {
    const updatedNotes = notes.filter((data) => data.id !== note.id);
    setNotes(updatedNotes);
    setArchiveNotes((preArr) => [note, ...preArr]);
    localStorage.setItem("notes", JSON.stringify([...updatedNotes]));
    localStorage.setItem("archive", JSON.stringify([note, ...archiveNotes]));
  };

  const deleteNote = (note) => {
    const updatedNotes = notes.filter((data) => data.id !== note.id);
    setNotes(updatedNotes);
    setDeletedNotes((preArr) => [note, ...preArr]);
    localStorage.setItem("notes", JSON.stringify([...updatedNotes]));
    localStorage.setItem("delete", JSON.stringify([note, ...deletedNotes]));
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const [bgColor, setBgColor] = useState([
    "#FDCFE8",
    "#F28B82",
    "#FBBC04",
    "#FFF475",
    "#CCFF90",
  ]);
  

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;



  const [bgColorChange, setbgColorChange] = useState(JSON.parse(localStorage.getItem("notes"))[index].bgColorData || "")

  

  const handleBgColorChange = (color, id) => {
    setbgColorChange(color)
    const updateColor = notes.map((item) => {
      if (item.id === id) {
        return {...item, bgColorData : color };
      } else {
        return item;
      }
    })
   localStorage.setItem("notes" , JSON.stringify(updateColor))
  };

   const colorChange = notes.map((item) => item.id === note.id && note.bgColorData)
  

  const [openModal, setOpenModal] = React.useState(false);
  const handleOpen = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  return (
    <StyledCard style={{ backgroundColor: bgColorChange }}>
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
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <div style={{ display: "flex" }}>
            {bgColor.map((color) => (
              <StyledBox
                key={color}
                style={{ backgroundColor: color }}
                onClick={() => handleBgColorChange(color, note.id)}
              />
            ))}
          </div>
        </Popover>
        <BorderColorOutlined
          style={{ cursor: "pointer" }}
          onClick={handleOpen}
        />
        <ModalBox
          open={openModal}
          handleCloseModal={handleCloseModal}
          setOpenModal={setOpenModal}
          note={note}
          index={index}
        />
        <ArchiveOutlined
          onClick={() => archiveNote(note)}
          style={{ cursor: "pointer" }}
        />
        <DeleteOutline
          style={{ cursor: "pointer" }}
          onClick={() => deleteNote(note)}
        />
      </CardActions>
    </StyledCard>
  );
};

export default NoteList;
