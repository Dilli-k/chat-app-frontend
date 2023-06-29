import React from "react";
import { Box, Stack } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";
import Message from "./Message";

const Conversation = () => {
  return (
    <Stack height={"100%"} maxHeight={"100vh"} width={"auto"}>
      {/* ChatHeader */}
      <Header />
      {/* Msg */}
      <Box
        width="100%"
        sx={{ flexGrow: 1, height: "100%", overflow: "scroll" }}
      >
        <Message menu={true} />
      </Box>
      {/* ChatFooter */}
      <Footer />
    </Stack>
  );
};

export default Conversation;
