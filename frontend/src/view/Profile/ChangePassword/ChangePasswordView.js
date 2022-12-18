import InputTypePassword from "../../../components/Forms/InputTypePassword";
import { Box, Button } from "@mui/material";

export default function ChangePassword() {
  return (
    <>
      <h2>Change password</h2>
      <InputTypePassword label="Actual password" value="" />
      <InputTypePassword label="New password" value="" />
      <InputTypePassword label="Repeat new password" value="" />
      <Box style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button variant="contained" sx={{ mt: 2, mb: -1 }}>
          Save
        </Button>
      </Box>
    </>
  );
}
