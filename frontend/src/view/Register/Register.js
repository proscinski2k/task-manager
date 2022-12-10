import InputTypeText from "../../components/Forms/InputTypeText";
import InputTypePassword from "../../components/Forms/InputTypePassword";
import Grid from "@mui/system/Unstable_Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import LoginIcon from "@mui/icons-material/Login";
import registerImage from "../../assets/images/register.jpg";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import { memo, useState } from "react";
import Skeleton from "@mui/material/Skeleton";

function Register() {
  const imgSkeleton = (
    <Skeleton variant="rectangular" width={"100%"} height={410} />
  );

  const [loaded, setLoaded] = useState(false);
  return (
    <>
      <Grid xs={6} style={{ marginTop: "-60px" }}>
        {loaded ? null : imgSkeleton}
        <img
          style={{
            width: "100%",
            ...(loaded ? null : { display: "none" }),
          }}
          src={registerImage}
          alt="banner login"
          onLoad={() => {
            setLoaded(true);
          }}
        />
      </Grid>
      <Grid xs={6}>
        <Card variant="outlined">
          <CardContent>
            <AddIcon
              sx={{
                fontSize: 80,
                color: "#fff",
                bgcolor: "primary.main",
                p: 3,
                borderRadius: "50%",
              }}
            />
            <h1>Create you'r account</h1>
            <p>
              If you have account{" "}
              <Link to="/login">
                <b>click here</b>
              </Link>
            </p>
            <InputTypeText label="Login" />
            <InputTypeText label="Name" />
            <InputTypeText label="Last name" />
            <InputTypePassword label="Password" />
            <InputTypePassword label="Repeat password" />
          </CardContent>
          <CardActions sx={{ justifyContent: "flex-end", m: 1 }}>
            <Link to="/login" style={{ textDecoration: "none" }}>
              <Button sx={{ pr: 3 }} variant="text">
                Login page
              </Button>
            </Link>
            <Button variant="contained">
              Register
              <LoginIcon sx={{ pl: 1 }} />
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
}

export default memo(Register);
