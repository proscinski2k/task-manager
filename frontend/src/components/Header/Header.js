import { styled, alpha } from "@mui/material/styles";
import {
  InputBase,
  Typography,
  Toolbar,
  Box,
  AppBar,
  Avatar,
  Button,
} from "@mui/material";
import {
  Search as SearchIcon,
  CalendarMonth as CalendarMonthIcon,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import LeftMenu from "./LeftMenu/LeftMenu";

import { useSelector } from 'react-redux'

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));




export default function Header() {
  const currentUser = useSelector((state) => state.currentUser);
  return (
    <Box sx={{ flexGrow: 1, zIndex: 999, position: "relative" }}>
      <AppBar position="static">
        <Toolbar>
          <LeftMenu />
          <Link to="/" style={{ textDecoration: "none" }}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                display: { xs: "none", sm: "flex" },
                color: "white",
              }}
            >
              <CalendarMonthIcon sx={{ paddingTop: "3px", pr: 1 }} />
              <span>TaskManager</span>
            </Typography>
          </Link>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {
              currentUser.data.firstname ? (
              <Link to={`profile/${currentUser.data.save_url}`}>
                <Avatar alt={currentUser.data.firstname} src="/static/images/avatar/1.jpg" />
              </Link>
              ) : null
            }
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
