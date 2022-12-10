import { styled, alpha } from "@mui/material/styles";
import { WeekView } from "@devexpress/dx-react-scheduler-material-ui";

const PREFIX = "Demo";

const classes = {
  todayCell: `${PREFIX}-todayCell`,
  weekendCell: `${PREFIX}-weekendCell`,
  today: `${PREFIX}-today`,
  weekend: `${PREFIX}-weekend`,
};

const StyledWeekViewTimeTableCell = styled(WeekView.TimeTableCell)(
  ({ theme }) => ({
    [`&.${classes.todayCell}`]: {
      backgroundColor: alpha(theme.palette.primary.main, 0.1),
      "&:hover": {
        backgroundColor: alpha(theme.palette.primary.main, 0.14),
      },
      "&:focus": {
        backgroundColor: alpha(theme.palette.primary.main, 0.16),
      },
    },
    [`&.${classes.weekendCell}`]: {
      backgroundColor: alpha(theme.palette.action.disabledBackground, 0.04),
      "&:hover": {
        backgroundColor: alpha(theme.palette.action.disabledBackground, 0.04),
      },
      "&:focus": {
        backgroundColor: alpha(theme.palette.action.disabledBackground, 0.04),
      },
    },
  })
);

export default function TimeTableCell(props) {
  const { startDate } = props;
  const date = new Date(startDate);

  if (date.getDate() === new Date().getDate()) {
    return (
      <StyledWeekViewTimeTableCell
        onClick={() => {
          console.log("test");
        }}
        {...props}
      />
    );
  }
  if (date.getDay() === 0 || date.getDay() === 6) {
    return <StyledWeekViewTimeTableCell {...props} />;
  }
  return <StyledWeekViewTimeTableCell {...props} />;
}
