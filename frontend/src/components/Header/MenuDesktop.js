import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export default function MenuDesktop(props) {
  return (
    <Menu
      anchorEl={props.anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={props.menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={props.isMenuOpen}
      onClose={props.onMenuClose}
    >
      <MenuItem onClick={props.onMenuClose}>Profile</MenuItem>
      <MenuItem onClick={props.onMenuClose}>My account</MenuItem>
    </Menu>
  );
}
