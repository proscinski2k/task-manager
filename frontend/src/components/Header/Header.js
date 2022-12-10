import { useState } from "react";
import MenuDesktop from "./MenuDesktop";
import MenuMobile from "./MenuMobile";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Link } from "react-router-dom";
import LeftMenu from "./LeftMenu/LeftMenu";

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
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(false);
  const [anchorEl, setAnchorEl] = useState(false);
  // const isMenuOpen = anchorEl;
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
  const mobileMenuId = "primary-search-account-menu-mobile";
  const menuId = "primary-search-account-menu";

  return (
    <Box sx={{ flexGrow: 1, zIndex: 999, position: "relative" }}>
      <AppBar position="static">
        <Toolbar>
          <LeftMenu />
          <Link to="/">
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
            {/* add menu here */}
          </Box>
        </Toolbar>
      </AppBar>
      <MenuMobile
        mobileMenuId={mobileMenuId}
        anchorEl={anchorEl}
        mobileMoreAnchorEl={mobileMoreAnchorEl}
        onMobileMenuClose={() => {
          handleMobileMenuClose();
        }}
        onProfileMenuOpen={() => {
          handleProfileMenuOpen();
        }}
      />
      <MenuDesktop
        menuId={menuId}
        onMenuClose={() => {
          handleMenuClose();
        }}
        isMenuOpen={anchorEl}
        anchorEl={anchorEl}
      />
    </Box>
  );
}
