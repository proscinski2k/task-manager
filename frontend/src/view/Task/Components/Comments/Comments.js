import {
  ListItemText,
  ListItemAvatar,
  List,
  ListItem,
  Button,
  Divider,
  Avatar,
} from "@mui/material";
import { Editor } from "react-draft-wysiwyg";
import { useState } from "react";

export default function Comments() {
  const [editorState, setEditorState] = useState("");
  const onEditorStateChange = (val) => {
    setEditorState(val);
    console.log(val);
  };

  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Adrian Prościński" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Adrian Prościński"
          secondary={
            <>
              <Editor
                editorState={editorState}
                placeholder="Comment"
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="editorClassName"
                onEditorStateChange={onEditorStateChange}
              />
              <Button sx={{ mt: 1 }} variant="contained">
                Send
              </Button>
            </>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Jan Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Jan Kowalski"
          secondary={
            <>{" — I'll be in your neighborhood doing errands this…"}</>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Tom Hawk" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Tom Hawk"
          secondary={<>{" — Wish I could come, but I'm out of town this…"}</>}
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Cindy Baker"
          secondary={
            <>{" — Do you have Paris recommendations? Have you ever…"}</>
          }
        />
      </ListItem>
    </List>
  );
}
