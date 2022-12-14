import { Button, Badge } from "@mui/material";

export default function RegisteredTime() {
  return (
    <>
      <Badge
        badgeContent="25h"
        style={{ cursor: "pointer" }}
        color="primary"
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <Button variant="outlined">Add</Button>
      </Badge>
      <Button sx={{ ml: 3 }} variant="outlined">
        View details
      </Button>
    </>
  );
}
