import { styled, alpha } from "@mui/material/styles";
import { WeekView } from "@devexpress/dx-react-scheduler-material-ui";

const PREFIX = "Demo";

const classes = {
  todayCell: `${PREFIX}-todayCell`,
  weekendCell: `${PREFIX}-weekendCell`,
  today: `${PREFIX}-today`,
  weekend: `${PREFIX}-weekend`,
};

const StyledWeekViewDayScaleCell = styled(WeekView.DayScaleCell)(
  ({ theme }) => ({
    [`&.${classes.today}`]: {
      backgroundColor: alpha(theme.palette.primary.main, 0.16),
    },
    [`&.${classes.weekend}`]: {
      backgroundColor: alpha(theme.palette.action.disabledBackground, 0.06),
    },
  })
);

export default function DayScaleCell(props) {
  const { startDate, today } = props;

  if (today) {
    return <StyledWeekViewDayScaleCell {...props} />;
  }
  if (startDate.getDay() === 0 || startDate.getDay() === 6) {
    return <StyledWeekViewDayScaleCell {...props} />;
  }
  return <StyledWeekViewDayScaleCell {...props} />;
}
