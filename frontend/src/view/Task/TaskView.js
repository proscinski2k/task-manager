import { useParams } from "react-router-dom";
import Grid from "@mui/system/Unstable_Grid";
import {
  ListItemText,
  ListItemAvatar,
  List,
  ListItem,
  Card,
  CardContent,
  Button,
  Divider,
  Chip,
  Avatar,
  CardActions,
  Box,
  Stack,
} from "@mui/material";
import {
  MoreTime as MoreTimeIcon,
  AddReaction as AddReactionIcon,
  EmojiEmotions as EmojiEmotionsIcon,
  GitHub as GitHubIconIcon,
  Style as StyleIcon,
} from "@mui/icons-material";
import BudgeEdit from "../../components/BudgeEdit/BudgeEdit";
import Status from "./Components/Status/Status";
import Founder from "./Components/Founder/Founder";
import Contractor from "./Components/Contractor/Contractor";
import RegisteredTime from "./Components/RegisteredTime/RegisteredTime";
import GitHubBranch from "./Components/GitHubBranch/GitHubBranch";
import Comments from "./Components/Comments/Comments";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";

export default function Task(props) {
  const { id } = useParams();
  return (
    <>
      <Grid xs={12}>
        <Stack spacing={2} sx={{ display: "block", mb: 2 }}>
          <Breadcrumbs />
        </Stack>
      </Grid>
      <Grid lg={9} md={8} xs={12}>
        <Box sx={{ display: "flex" }}>
          <Chip
            color="primary"
            label="Data of create: 01.09.2022"
            variant="outlined"
          />
          <Chip
            color="success"
            sx={{ ml: 1 }}
            label="Data of modification: 06.09.2022"
            variant="outlined"
          />
        </Box>
        <Card sx={{ mt: 2 }}>
          <>
            <CardContent
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <BudgeEdit>
                <h2>Title</h2>
              </BudgeEdit>
              <BudgeEdit>
                <p>Description</p>
              </BudgeEdit>
              <span>{id}</span>
            </CardContent>
            <CardActions>
              <Button variant="contained">Save</Button>
            </CardActions>
          </>
        </Card>
        <Card
          sx={{
            mt: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            px: 2,
          }}
        >
          <h3>Comments</h3>
          <Comments />
        </Card>
      </Grid>
      <Grid lg={3} md={4} xs={12}>
        <Card>
          <CardContent>
            <List
              sx={{
                width: "100%",
                maxWidth: 360,
                bgcolor: "background.paper",
              }}
            >
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <StyleIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Status" secondary={<Status />} />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <AddReactionIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Founder" secondary={<Founder />} />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <EmojiEmotionsIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Contractor" secondary={<Contractor />} />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <GitHubIconIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Branch" secondary={<GitHubBranch />} />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <MoreTimeIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Registered time"
                  secondary={<RegisteredTime />}
                />
              </ListItem>
            </List>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
}
