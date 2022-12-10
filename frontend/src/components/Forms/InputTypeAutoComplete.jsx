import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

export default function InputTypeAutoComplete(props) {
  return (
    <Autocomplete
      multiple
      id="tags-standard"
      options={props.options}
      getOptionLabel={(option) => option.label}
      defaultValue={[]}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="standard"
          label="Team users"
          //   placeholder="Users"
        />
      )}
    />
  );
}
