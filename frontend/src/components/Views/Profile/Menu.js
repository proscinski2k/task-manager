import Divider from "@mui/material/Divider";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import ContentCut from "@mui/icons-material/ContentCut";
import Paper from "@mui/material/Paper";
import PersonIcon from "@mui/icons-material/Person";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LockResetIcon from "@mui/icons-material/LockReset";

export default function Menu() {
  const menuFirst = [
    {
      id: 1,
      name: "Change basic data",
      link: "/profile/basic-data",
      icon: (
        <PersonIcon>
          <ContentCut fontSize="small" />
        </PersonIcon>
      ),
    },
    {
      id: 2,
      name: "Change avatar",
      link: "/profile/profile-avatar",
      icon: (
        <AccountCircleIcon>
          <ContentCut fontSize="small" />
        </AccountCircleIcon>
      ),
    },
    {
      id: 3,
      name: "Change password",
      link: "/profile/change-password",
      icon: (
        <LockResetIcon>
          <ContentCut fontSize="small" />
        </LockResetIcon>
      ),
    },
  ];

  const menuSecond = [
    {
      id: 1,
      name: "Stats",
      link: "/profile/stats",
      icon: (
        <QueryStatsIcon>
          <ContentCut fontSize="small" />
        </QueryStatsIcon>
      ),
    },
  ];

  return (
    <Paper sx={{ width: 1 }}>
      <MenuList>
        {menuFirst.map((el) => {
          return (
            <MenuItem key={el.id} to={el.link} component={Link}>
              {el.icon}
              <ListItemText>{el.name}</ListItemText>
              <Typography variant="body2" color="text.secondary">
                <ArrowForwardIosIcon />
              </Typography>
            </MenuItem>
          );
        })}
        <Divider />
        {menuSecond.map((el) => {
          return (
            <MenuItem key={el.id} to={el.link} component={Link}>
              {el.icon}
              <ListItemText>{el.name}</ListItemText>
            </MenuItem>
          );
        })}
      </MenuList>
    </Paper>
  );
}
