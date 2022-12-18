import { Box, Button } from "@mui/material";

export default function ProfileAvatar() {
  return (
    <>
      <h2>Change profile avatar</h2>
      <input
        accept="image/*"
        style={{ display: "block" }}
        id="raised-button-file"
        multiple
        type="file"
      />
      <label htmlFor="raised-button-file">
        <Button variant="raised" component="span">
          Upload
        </Button>
      </label>
      <Box style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button variant="contained" sx={{ mt: 2, mb: -1 }}>
          Save
        </Button>
      </Box>
    </>
  );
}
