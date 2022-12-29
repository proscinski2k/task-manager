import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";

import HomeIcon from "@mui/icons-material/Home";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import AddIcon from "@mui/icons-material/Add";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import NewReleasesIcon from "@mui/icons-material/NewReleases";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import PersonIcon from "@mui/icons-material/Person";
import FaceIcon from "@mui/icons-material/Face";
import LockResetIcon from "@mui/icons-material/LockReset";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import { useSelector } from 'react-redux';

export function Menu() {
  const currentUser = useSelector((state) => state.currentUser);
  const [loggedMenu, setLoggedMenu] = useState([]);

  const mainMenuData = [
    { id: 1, name: "Home", link: "/", icon: <HomeIcon /> },
    { id: 2, name: "Login", link: "/login", icon: <ExitToAppIcon /> },
    {
      id: 3,
      name: "Register",
      link: "/register",
      icon: <PersonAddIcon />,
    },
    {
      id: 4,
      name: "Create task",
      link: "/create-task",
      icon: <AddIcon />,
    },
    {
      id: 5,
      name: "Create team",
      link: "/create-team",
      icon: <GroupAddIcon />,
    },
    {
      id: 6,
      name: "Task 21",
      link: "/projects/farm-game/tasks/5",
      icon: <BookmarkAddedIcon />,
    },
    {
      id: 11,
      name: "Tasks farm game",
      link: "/projects/farm-game/tasks",
      icon: <BookmarkAddedIcon />,
    },
    {
      id: 9,
      name: "Project farm game",
      link: "/projects/farm-game",
      icon: <BookmarkAddedIcon />,
    },
    {
      id: 10,
      name: "Projects",
      link: "/projects",
      icon: <BookmarkAddedIcon />,
    },
    {
      id: 7,
      name: "Not found",
      link: "/dadasdasda",
      icon: <NewReleasesIcon />,
    },
  ];

useEffect(()=>{
  setLoggedMenu([
    {
      id: 8,
      name: "Profile",
      link: `profile/${currentUser.data.save_url}`,
      icon: <AccountCircleIcon />,
    },
    {
      id: 1,
      name: "Basic data",
      link: `/profile/${currentUser.data.save_url}/basic-data`,
      icon: <PersonIcon />,
    },
    {
      id: 2,
      name: "Profile avatar",
      link: `/profile/${currentUser.data.save_url}/avatar`,
      icon: <FaceIcon />,
    },
    {
      id: 3,
      name: "Change password",
      link: `/profile/${currentUser.data.save_url}/change-password`,
      icon: <LockResetIcon />,
    },
    {
      id: 4,
      name: "Stats",
      link: `/profile/${currentUser.data.save_url}/stats`,
      icon: <QueryStatsIcon />,
    },
  ]);
}, [])

  
  return (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        {mainMenuData.map((item, index) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton to={item.link} component={Link}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      {currentUser.data.firstname ? (
        <>
      <Divider />
      <List>
        {loggedMenu.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton to={item.link} component={Link}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List></>) : null }
    </Box>
  );
}

export default function LeftMenu() {
  const [state, setState] = useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    setState({ left: open });
  };

  return (
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="open drawer"
        sx={{ mr: 2 }}
        onClick={toggleDrawer("left", true)}
      >
        <MenuIcon />
      </IconButton>

      <Drawer
        anchor="left"
        open={state["left"]}
        onClose={toggleDrawer("left", false)}
      >
        <Menu />
      </Drawer>
    </>
  );
}
