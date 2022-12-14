import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function InputTypeCheckbox(props) {
  return (
    <FormControl sx={{ width: 1, my: 1 }} component="fieldset">
      <FormLabel sx={{ width: 1, textAlign: "left" }} component="legend">
        {props.label}
      </FormLabel>
      <FormGroup aria-label="position" row>
        <FormControlLabel
          value="end"
          control={
            <Checkbox
              checked={props.checked}
              onChange={props.handleChange}
              inputProps={{ "aria-label": "controlled" }}
            />
          }
          label={props.labelCheckbox}
          labelPlacement="end"
        />
      </FormGroup>
    </FormControl>
  );
}
