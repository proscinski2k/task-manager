import { Chip, Avatar } from "@mui/material";

export default function Contractor() {
  return (
    <Chip
      color="primary"
      avatar={<Avatar alt="Jan Kowalski" src="/static/images/avatar/1.jpg" />}
      label="Jan Kowalski"
      variant="outlined"
    />
  );
}
