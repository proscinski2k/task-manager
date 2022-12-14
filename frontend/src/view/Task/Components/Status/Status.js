import { Chip } from "@mui/material";
import { ArrowRight as ArrowRightIcon } from "@mui/icons-material";
// import PauseIcon from '@mui/icons-material/Pause';
// import DoneIcon from "@mui/icons-material/Done";
// import DoneAllIcon from '@mui/icons-material/DoneAll';

export default function Status() {
  return <Chip color="warning" label="To do" icon={<ArrowRightIcon />} />;
}
