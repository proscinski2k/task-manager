import { Appointments } from "@devexpress/dx-react-scheduler-material-ui";

export default function Appointment({ children, style, ...restProps }) {
  return (
    <>
      <Appointments.Appointment
        {...restProps}
        style={{
          ...style,
          backgroundColor: "#FFC107",
          borderRadius: "8px",
        }}
        onClick={(e) => {
          console.log(e);
        }}
      >
        {children}
      </Appointments.Appointment>
    </>
  );
}
