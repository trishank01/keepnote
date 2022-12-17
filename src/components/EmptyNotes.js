import { LightbulbOutlined } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import {  Box } from "@mui/system";
import React from "react";

const Light = styled(LightbulbOutlined)`
  font-size: 120px;
  color: #F5F5F5;
`;

const Text = styled(Typography)`
   color: #80868b;
   font-size: 22px;
`

const Container = styled(Box)`
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 20vh;
`

const EmptyNotes = () => {
  return (
    <Container>
      <Light />
      <Text>Notes you add appear here</Text>
    </Container>
  );
};

export default EmptyNotes;
