// import React from "react";
// import Chats from "./Chats";

// const GeneralApp = () => {

//   return (
//     <>
//       <div>
//         {/*chat*/}
//         <Chats />
//       </div>
//     </>
//   );
// };

// export default GeneralApp;

import React from "react";
import Chats from "./Chats";
import { Box, Stack, Typography } from "@mui/material";
import Conversation from "../../components/Conversation";
import { useTheme } from "@mui/material/styles";
import Contact from "../../components/Contact";
import { useSelector } from "react-redux";
import SharedMessages from "../../components/SharedMessages";
import { StarredMessages } from "../../components/StarredMessages";
import NoChatSVG from "../../assets/Illustration/NoChat";

// const ScrollableStack = styled(Stack)(({ theme }) => ({
//   flexGrow: 1,
//   overflowY: "scroll",
//   overscrollBehavior: "none",
//   scrollbarWidth: "none",
//   scrollbarColor: "transparent", // Set custom color to match background
//   "-ms-overflow-style": "none",
//   "&::-webkit-scrollbar": {
//     width: "0px",
//     background: "transparent",
//   },
// }));

const GeneralApp = () => {
  const theme = useTheme();
  const { sidebar, chat_type, room_id } = useSelector((store) => store.app);

  return (
    <Stack direction={"row"} sx={{ width: "100%" }}>
      {/* Chats */}
      <Chats />

      {/* Conversation */}

      <Box
        sx={{
          height: "100%",
          overflow: "hidden",
          width: sidebar.open ? "calc(100vw - 740px)" : "calc(100vw - 420px)",
          backgroundColor:
            theme.palette.mode === "light"
              ? "#F0F4FA"
              : theme.palette.background.default,
          "&::-webkit-scrollbar": {
            width: "0px",
            background: "transparent",
          },
          "&::-webkit-scrollbar-thumb": {
            display: "none",
          },
        }}
      >
        {room_id !== null && chat_type === "individual" ? (
          <Conversation />
        ) : (
          <Stack
            spacing={2}
            sx={{ height: "100%", width: "100%" }}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <NoChatSVG />
            <Typography variant="subtitle2">
              Start a Conversation
            </Typography>
          </Stack>
        )}
      </Box>
      {/* Contact */}
      {sidebar.open &&
        (() => {
          switch (sidebar.type) {
            case "CONTACT":
              return <Contact />;
            case "STARRED":
              return <StarredMessages />;
            case "SHARED":
              return <SharedMessages />;

            default:
              break;
          }
        })()}
    </Stack>
  );
};

export default GeneralApp;
