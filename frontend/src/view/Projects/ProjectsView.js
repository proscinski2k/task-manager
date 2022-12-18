import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Stack,
} from "@mui/material";
import Grid from "@mui/system/Unstable_Grid";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";

export default function Projects() {
  function createData(projectName, tasks, toDo, pending, done, link) {
    return { projectName, tasks, toDo, pending, done, link };
  }

  const rows = [
    createData("Game farm", 32, 5, 3, 24, "game-farm"),
    createData("Game H&S", 41, 6, 8, 37, "game-hs"),
    createData("Minecraft mod", 75, 8, 7, 60, "minecraft-mod"),
    createData("P&P", 23, 8, 4, 11, "pp"),
    createData("Puzzle", 19, 3, 6, 10, "puzzle"),
  ];

  return (
    <>
      <Grid xs={12}>
        <Stack spacing={2} sx={{ display: "block", mb: 2 }}>
          <Breadcrumbs />
        </Stack>
      </Grid>
      <h1>Your projects</h1>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Project</TableCell>
              <TableCell align="right">Tasks</TableCell>
              <TableCell align="right">To do</TableCell>
              <TableCell align="right">Pending action</TableCell>
              <TableCell align="right">Done</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Link to={"/projects/" + row.link}>{row.projectName}</Link>
                </TableCell>
                <TableCell align="right">{row.tasks}</TableCell>
                <TableCell align="right">{row.toDo}</TableCell>
                <TableCell align="right">{row.pending}</TableCell>
                <TableCell align="right">{row.done}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
