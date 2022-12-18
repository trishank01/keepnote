import {
  Box,
  TextField,
  ClickAwayListener,
  useStepContext,
  Alert,
} from "@mui/material";
import React, { useState, useRef, useContext } from "react";
import { styled } from "@mui/material/styles";
import { DataContext } from "../context/DataProvider";
import { v4 as uuid } from "uuid";

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 600px;
  gap: 10px;
  box-shadow: 0 1px 2px 0 rgb(60 64 67/ 30%), 0 2px 6px 2px rgb(60 64 67/ 15%);
  border-radius: 8px;
  border-color: #e0e0e0;
  margin: auto;
  padding: 15px;
  min-height: 35px;
`;

const AlertBox = styled(Alert)`
  position: absolute;
  right: 20px;
  top: 20px;
  z-index: 1203;
`;

const initialNote = {
  id: "",
  heading: "",
  text: "",
  bgColorData : null
};

const Form = () => {
  const [showTextField, setShowTextField] = useState(false);
  const [addNote, setAddNote] = useState({ ...initialNote, id: uuid() });
  const containerRef = useRef();
  const { notes, setNotes } = useContext(DataContext);

  const onTextAreaClick = () => {
    setShowTextField(true);
    containerRef.current.style.minHeight = "100px";
  };

  const handleClickAway = () => {
    setShowTextField(false);
    containerRef.current.style.minHeight = "35px";
    if (addNote.heading || addNote.text) {
      setNotes((prevState) => [addNote, ...prevState]);
      localStorage.setItem("notes" , JSON.stringify([addNote , ...notes  ]))
    }
    setAddNote({ ...initialNote, id: uuid() });
   
  };


  const onTextChange = (e) => {
    let NewNote = { ...addNote, [e.target.name]: e.target.value };
    setAddNote(NewNote);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Container ref={containerRef}>
        {showTextField && (
          <>
            <TextField
              placeholder="Title"
              variant="standard"
              InputProps={{ disableUnderline: true }}
              style={{ marginBotton: "10px" }}
              name="heading"
              onChange={(e) => onTextChange(e)}
              value={addNote.heading}
            />
            <AlertBox  color="info">
               Click OutSide Box to Add Notes
            </AlertBox>
          </>
        )}
        <TextField
          placeholder="Take a note..."
          variant="standard"
          multiline
          maxRows={Infinity}
          InputProps={{ disableUnderline: true }}
          onClick={onTextAreaClick}
          name="text"
          onChange={(e) => onTextChange(e)}
          value={addNote.text}
        />
      </Container>
    </ClickAwayListener>
  );
};

export default Form;
