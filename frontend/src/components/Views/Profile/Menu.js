import Divider from "@mui/material/Divider";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import ContentCut from "@mui/icons-material/ContentCut";
import Cloud from "@mui/icons-material/Cloud";
import Paper from "@mui/material/Paper";
import PersonIcon from "@mui/icons-material/Person";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";

export default function Menu() {
  const menuFirst = [
    { id: 1, name: "Change basic data", link: "/profile/basic-data" },
    { id: 2, name: "Change avatar", link: "/profile/profile-avatar" },
    { id: 3, name: "Change password", link: "/profile/change-password" },
  ];

  const menuSecond = [{ id: 1, name: "Stats", link: "/profile/stats" }];

  return (
    <Paper sx={{ width: 1 }}>
      <MenuList>
        {menuFirst.map((el) => {
          return (
            <MenuItem key={el.id} to={el.link} component={Link}>
              <PersonIcon>
                <ContentCut fontSize="small" />
              </PersonIcon>
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
              <QueryStatsIcon>
                <Cloud fontSize="small" />
              </QueryStatsIcon>
              <ListItemText>{el.name}</ListItemText>
            </MenuItem>
          );
        })}
      </MenuList>
    </Paper>
  );
}
