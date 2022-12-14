import { Chip, Avatar } from "@mui/material";

export default function Founder() {
  return (
    <Chip
      color="primary"
      avatar={
        <Avatar alt="Adrian Prościński" src="/static/images/avatar/1.jpg" />
      }
      label="Adrian Prościński"
      variant="outlined"
    />
  );
}
