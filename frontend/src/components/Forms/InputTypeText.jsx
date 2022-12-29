import TextField from "@mui/material/TextField";

export default function InputTypeText(props) {
  return (
    <div>
      <TextField
        onChange={props.onChange}
        sx={{ width: 1, my: 1 }}
        id="input-with-sx"
        label={props.label}
        value={props.value}
        variant="standard"
      />
    </div>
  );
}
