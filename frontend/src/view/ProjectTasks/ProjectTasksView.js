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
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";

export default function Projects() {
  const { pathname } = useLocation();
  const getCurrentPath = () => {
    return pathname.slice(-1) === "/" ? pathname : `${pathname}/`;
  };
  const rows = [
    {
      taskName: "Build farm",
      reportingPerson: "Arian Prościński",
      reportingPersonUrl: "adrian-proscinski",
      performingPerson: "Sebastian Prościński",
      performingPersonUrl: "sebastian-proscinski",
      dateAdded: "17.12.2022",
      status: "To do",
      taskUrl: "task-1",
    },
    {
      taskName: "Build fence",
      reportingPerson: "Arian Prościński",
      reportingPersonUrl: "adrian-proscinski",
      performingPerson: "Sebastian Prościński",
      performingPersonUrl: "sebastian-proscinski",
      dateAdded: "17.12.2022",
      status: "To do",
      taskUrl: "task-1",
    },
    {
      taskName: "Build launcher",
      reportingPerson: "Arian Prościński",
      reportingPersonUrl: "adrian-proscinski",
      performingPerson: "Sebastian Prościński",
      performingPersonUrl: "sebastian-proscinski",
      dateAdded: "17.12.2022",
      status: "To do",
      taskUrl: "task-1",
    },
    {
      taskName: "Build chicken model",
      reportingPerson: "Arian Prościński",
      reportingPersonUrl: "adrian-proscinski",
      performingPerson: "Sebastian Prościński",
      performingPersonUrl: "sebastian-proscinski",
      dateAdded: "17.12.2022",
      status: "To do",
      taskUrl: "task-1",
    },
    {
      taskName: "Logo project",
      reportingPerson: "Arian Prościński",
      reportingPersonUrl: "adrian-proscinski",
      performingPerson: "Sebastian Prościński",
      performingPersonUrl: "sebastian-proscinski",
      dateAdded: "17.12.2022",
      status: "To do",
      taskUrl: "task-1",
    },
  ];

  return (
    <>
      <Grid xs={12}>
        <Stack spacing={2} sx={{ display: "block", mb: 2 }}>
          <Breadcrumbs />
        </Stack>
      </Grid>
      <h1>FE Minecraft</h1>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Task</TableCell>
              <TableCell align="right">Reporting person</TableCell>
              <TableCell align="right">Performing person</TableCell>
              <TableCell align="right">Date added</TableCell>
              <TableCell align="right">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Link to={getCurrentPath() + row.link}>{row.taskName}</Link>
                </TableCell>
                <TableCell align="right">
                  <Link to={`/profile/${row.reportingPersonUrl}`}>
                    {row.reportingPerson}
                  </Link>
                </TableCell>
                <TableCell align="right">
                  <Link to={`/profile/${row.performingPersonUrl}`}>
                    {row.performingPerson}
                  </Link>
                </TableCell>
                <TableCell align="right">{row.dateAdded}</TableCell>
                <TableCell align="right">{row.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
