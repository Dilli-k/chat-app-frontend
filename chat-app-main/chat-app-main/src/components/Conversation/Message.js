import { Box, Stack} from "@mui/material";
import React from "react";
import { Chat_History } from "../../data";
import { Timeline, TextMsg, MediaMsg, ReplyMsg, LinkMsg, DocMsg } from "./MsgTypes";
import { useTheme } from "@mui/material/styles";

const Message = ({menu}) => {
    const theme = useTheme();
  return (
    <Box
      p={3}
      sx={{
        backgroundColor:
          theme.palette.mode === "light"
            ? "#F8FAFF"
            : theme.palette.background.paper
      }}
    >
      <Stack spacing={3}>
        {Chat_History.map((el) => {
          switch (el.type) {
            case "divider":
              //Time Line
              return <Timeline el={el} />;
            case "msg":
              switch (el.subtype) {
                case "img":
                  //img msg
                  return <MediaMsg el={el} menu={menu} />;
                  break;
                case "doc":
                  //Doc msg
                  return <DocMsg el={el} menu={menu} />;
                case "link":
                  //Link msg
                  return <LinkMsg el={el} menu={menu} />;
                case "reply":
                  //reply msg
                  return <ReplyMsg el={el} menu={menu} />;

                default:
                  //text msg
                  return <TextMsg el={el} menu={menu} />;
              }
            default:
              return <></>;
          }
        })}
      </Stack>
    </Box>
  );
};

export default Message;
