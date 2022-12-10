import InputTypeText from "../../components/Forms/InputTypeText";
import InputTypePassword from "../../components/Forms/InputTypePassword";
import Grid from "@mui/system/Unstable_Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import LoginIcon from "@mui/icons-material/Login";
import loginImage from "../../assets/images/login.jpg";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { Link } from "react-router-dom";
import { memo, useState } from "react";
import Skeleton from "@mui/material/Skeleton";

function Login() {
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
            ...(loaded ? {} : { display: "none" }),
          }}
          src={loginImage}
          onLoad={() => setLoaded(true)}
          alt="banner login"
        />
      </Grid>
      <Grid xs={6}>
        <Card variant="outlined">
          <CardContent>
            <LockOpenIcon
              sx={{
                fontSize: 80,
                color: "#fff",
                bgcolor: "primary.main",
                p: 3,
                borderRadius: "50%",
              }}
            />
            <h1>Log in to your account</h1>
            <p>
              If you doesn't have account yet{" "}
              <Link to="/register">
                <b>create here</b>
              </Link>
            </p>
            <InputTypeText label="Login" />
            <InputTypePassword label="Password" />
          </CardContent>
          <CardActions sx={{ justifyContent: "flex-end", m: 1 }}>
            <Button sx={{ pr: 3 }} variant="text">
              Password reset
            </Button>
            <Button variant="contained">
              Login
              <LoginIcon sx={{ pl: 1 }} />
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
}

export default memo(Login);
