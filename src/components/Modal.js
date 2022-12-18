import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { DataContext } from "../context/DataProvider";
import styled from "@emotion/styled";
import { TextField } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const StyledCardContent = styled(TextField)`
  max-height: 380px;
  overflow-y: auto;
`;

const ModalBox = ({ open, handleCloseModal, note  ,setOpenModal  }) => {
  const { notes, setNotes } = React.useContext(DataContext);
  const [heading, setHeading] = React.useState(note.heading)
  const [text, setText] = React.useState(note.text)



  const handleEditChange = (id) => {
    setNotes(
      notes.map((note) => {
        if(note.id === id){
          return {...note , heading : heading , text : text}
        }else {
          return note
        }
      })
    )
    setOpenModal(false)
  }

  console.log(notes)

  return (
    <div>
      <Modal
        open={open}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <StyledBox>
            <TextField 
            type="text" 
            name="heading"
            value={heading}
            onChange={(e) => setHeading(e.target.value)}
            />
            <StyledCardContent
              multiline
              maxRows={Infinity}
              type="text"
              name="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <Box>
            <Button onClick={() => handleEditChange(note.id)}>Save</Button>
            <Button onClick={() => setOpenModal(false)}>Cancel</Button>
            </Box>
          </StyledBox>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalBox;
