import { Breadcrumbs as MuiBreadcrumbs, Typography, Link } from "@mui/material";
import { NavigateNext as NavigateNextIcon } from "@mui/icons-material";

export default function Breadcrumbs() {
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/">
      Home
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/material-ui/getting-started/installation/"
    >
      Projects
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/material-ui/getting-started/installation/"
    >
      Game Project
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/material-ui/getting-started/installation/"
    >
      Tasks
    </Link>,
    <Typography key="3" color="text.primary">
      Create new npc "Smith"
    </Typography>,
  ];

  return (
    <MuiBreadcrumbs
      separator={<NavigateNextIcon fontSize="small" />}
      aria-label="breadcrumb"
    >
      {breadcrumbs}
    </MuiBreadcrumbs>
  );
}
