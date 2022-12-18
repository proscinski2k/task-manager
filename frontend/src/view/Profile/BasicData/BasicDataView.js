import InputTypeText from "../../../components/Forms/InputTypeText";
import InputTypeCheckbox from "../../../components/Forms/InputTypeCheckbox";
import { useState } from "react";
import { Button, Box } from "@mui/material";

export default function BasicData() {
  const [yourData] = useState({
    login: "Adrian2000",
    firstName: "Adrian",
    lastName: "Prościński",
  });
  return (
    <>
      <h2>Basic data</h2>
      <InputTypeText label="Login" value={yourData.login} />
      <InputTypeText label="Name" value={yourData.firstName} />
      <InputTypeText label="Last name" value={yourData.lastName} />
      <InputTypeCheckbox
        label="Public visibility"
        labelCheckbox="Stats"
        checked={true}
      />
      <Box style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button variant="contained" sx={{ mt: 2, mb: -1 }}>
          Save
        </Button>
      </Box>
    </>
  );
}
