import Grid from "@mui/material/Unstable_Grid2";
import Container from "@mui/material/Container";
// import { useEffect } from "react";

export default function Layout100(props) {
  return (
    <>
      {props.header}
      <Container maxWidth="lg">
        <Grid container spacing={2} sx={{ py: 4 }}>
          {props.content}
        </Grid>
      </Container>
      {props.footer}
    </>
  );
}
