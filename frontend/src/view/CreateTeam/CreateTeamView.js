import InputTypeText from "../../components/Forms/InputTypeText";
import Grid from "@mui/system/Unstable_Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import CreateTeamImg from "../../assets/images/create_team.jpg";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import { memo, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Skeleton from "@mui/material/Skeleton";
import InputTypeAutoComplete from "../../components/Forms/InputTypeAutoComplete";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";

function CreateTeam() {
  const [loaded, setLoaded] = useState(false);
  const [editorState, setEditorState] = useState("");

  const onEditorStateChange = (val) => {
    setEditorState(val);
    console.log(val);
  };
  const imgSkeleton = (
    <Skeleton variant="rectangular" width={"100%"} height={410} />
  );

  const users = [
    { label: "Adrian Prościński", id: 1 },
    { label: "Adam Rosołowski", id: 2 },
    { label: "Maciej Stencel", id: 3 },
    { label: "Sebastian Prościński", id: 4 },
    { label: "Jan Kowalski", id: 5 },
    { label: "Rafał Duda", id: 5 },
  ];

  return (
    <>
      <Grid xs={12}>
        <Stack spacing={2} sx={{ display: "block", mb: 2 }}>
          <Breadcrumbs />
        </Stack>
      </Grid>
      <Grid xs={6}>
        {loaded ? null : imgSkeleton}
        <img
          style={{
            width: "100%",
            ...(loaded ? null : { display: "none" }),
          }}
          src={CreateTeamImg}
          alt="banner login"
          onLoad={() => {
            setLoaded(true);
          }}
        />
      </Grid>
      <Grid xs={6}>
        <Card variant="outlined">
          <CardContent>
            <AddIcon
              sx={{
                fontSize: 80,
                color: "#fff",
                bgcolor: "primary.main",
                p: 3,
                borderRadius: "50%",
              }}
            />
            <h1>Create team</h1>
            <InputTypeText label="Team name" />
            <InputTypeAutoComplete label="Team members" options={users} />
            <Stack sx={{ mt: 3 }}>
              <Editor
                editorState={editorState}
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="editorClassName"
                placeholder="Project description"
                onEditorStateChange={onEditorStateChange}
              />
            </Stack>
          </CardContent>
          <CardActions sx={{ justifyContent: "flex-end", m: 1 }}>
            <Link to="/tasks" style={{ textDecoration: "none" }}>
              <Button sx={{ pr: 3 }} variant="text">
                List of team
              </Button>
            </Link>
            <Button variant="contained">
              Create team
              <AddIcon sx={{ pl: 1 }} />
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
}

export default memo(CreateTeam);
