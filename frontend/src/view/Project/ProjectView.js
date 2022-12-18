import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Grid from "@mui/system/Unstable_Grid";
import {
  Stack,
  Card,
  Box,
  Typography,
  CardContent,
  CardMedia,
} from "@mui/material";
import { useParams, useLocation, Link } from "react-router-dom";
import projectTasksListImg from "../../assets/images/project_tasks_list.jpg";
import crateTaskImg from "../../assets/images/create_task.jpg";
import manageTeamImg from "../../assets/images/create_team.jpg";
import editTeamImg from "../../assets/images/edit_team.jpg";

export default function Project() {
  const { projectTitle } = useParams();
  const { pathname } = useLocation();
  const getCurrentPath = () => {
    return pathname.slice(-1) === "/" ? pathname : `${pathname}/`;
  };
  const tabs = [
    {
      id: 1,
      title: "Tasks list",
      subtitle: "Display tasks list [preview, edit, delete]",
      image: projectTasksListImg,
      link: `${getCurrentPath()}tasks`,
    },
    {
      id: 2,
      title: "Add task",
      subtitle: "Add new task",
      image: crateTaskImg,
      link: `${getCurrentPath()}create-task`,
    },
    {
      id: 3,
      title: "Manage team members",
      subtitle: "Add/Remove member to/from team",
      image: manageTeamImg,
      link: `${getCurrentPath()}manage-team`,
    },
    {
      id: 4,
      title: "Edit project",
      subtitle: "Edit description etc.",
      image: editTeamImg,
      link: `${getCurrentPath()}edit-project`,
    },
  ];
  return (
    <>
      <Grid xs={12}>
        <Stack spacing={2} sx={{ display: "block", mb: 2 }}>
          <Breadcrumbs projectName={projectTitle} />
        </Stack>
      </Grid>
      <Grid xs={12}>
        <h1>{projectTitle}</h1>
      </Grid>
      {tabs.map((el) => {
        return (
          <Grid key={el.id} xs={12} sm={6} md={4} lg={4}>
            <Link to={el.link} style={{ textDecoration: "none" }}>
              <Card
                sx={{
                  display: "flex",
                  height: "160px",
                  justifyContent: "space-between",
                }}
              >
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <CardContent sx={{ flex: "1 0 auto" }}>
                    <Typography component="div" variant="h5">
                      {el.title}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      component="div"
                    >
                      {el.subtitle}
                    </Typography>
                  </CardContent>
                  <Box
                    sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
                  ></Box>
                </Box>
                <CardMedia
                  component="img"
                  sx={{ width: 151 }}
                  image={el.image}
                  alt="Live from space album cover"
                />
              </Card>
            </Link>
          </Grid>
        );
      })}
    </>
  );
}
