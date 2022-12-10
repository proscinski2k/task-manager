import { useState } from "react";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Container from "@mui/material/Container";
import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  DayView,
  WeekView,
  MonthView,
  Appointments,
  Toolbar,
  AppointmentTooltip,
  ViewSwitcher,
  DateNavigator,
  TodayButton,
} from "@devexpress/dx-react-scheduler-material-ui";
import TimeTableCell from "../../components/Calendar/TimeTableCell";
import DayScaleCell from "../../components/Calendar/DayScaleCell";
import Appointment from "../../components/Calendar/Appointment";

export default function MainCalendar() {
  const currentDateBackend = "2018-11-01";
  const schedulerData = [
    {
      id: 1,
      startDate: "2018-11-01T08:00",
      endDate: "2018-11-01T09:45",
      title: "Meeting",
    },
    {
      id: 2,
      startDate: "2018-11-01T09:45",
      endDate: "2018-11-01T11:00",
      title: "Meeting",
    },
    {
      id: 3,
      startDate: "2018-11-01T12:00",
      endDate: "2018-11-01T13:30",
      title: "Go to a gym",
    },
    {
      id: 4,
      startDate: "2018-11-01T13:30",
      endDate: "2018-11-01T15:00",
      title: "task JIDL-2",
    },
    {
      id: 5,
      startDate: "2018-11-01T15:00",
      endDate: "2018-11-01T16:00",
      title: "task JIDL-2 232",
    },
    {
      id: 6,
      startDate: "2018-11-02T15:00",
      endDate: "2018-11-02T16:00",
      title: "task JIDL-2 232",
    },
    {
      id: 7,
      startDate: "2018-10-30T09:00",
      endDate: "2018-10-30T14:00",
      title: "task JIDL-2 232",
    },
    {
      id: 8,
      startDate: "2018-10-29T08:00",
      endDate: "2018-10-29T16:00",
      title: "task JIDL-2 232",
    },
    {
      id: 9,
      startDate: "2018-10-31T10:00",
      endDate: "2018-10-31T17:00",
      title: "task JIDL-2 232",
    },
  ];
  const [currentDate, setCurrentDate] = useState(currentDateBackend);

  const currentDateChange = (currentDate) => {
    setCurrentDate(currentDate);
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid xs={12}>
            Home
            <Button variant="text">Text</Button>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button>
            <Paper>
              <Scheduler data={schedulerData} height={660}>
                <ViewState
                  currentDate={currentDate}
                  onCurrentDateChange={currentDateChange}
                />
                <WeekView
                  startDayHour={8}
                  endDayHour={16}
                  timeTableCellComponent={TimeTableCell}
                  dayScaleCellComponent={DayScaleCell}
                />
                <MonthView />
                <DayView />
                <Appointments appointmentComponent={Appointment} />
                <AppointmentTooltip showOpenButton showDeleteButton />
                <Toolbar />
                <DateNavigator />
                <TodayButton />
                <ViewSwitcher />
              </Scheduler>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
