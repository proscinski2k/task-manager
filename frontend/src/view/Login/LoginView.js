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
import { Skeleton, Stack } from "@mui/material";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import axios from "../../axios/axios";

import LoadingButton from '@mui/lab/LoadingButton';

import { useSnackbar } from 'notistack';
import { useSelector, useDispatch } from 'react-redux'
import { setCurrentUser } from '../../store/CurrentUser/CurrentUser';

function LoginView() {
  const { enqueueSnackbar } = useSnackbar();

  const [formData, setFormData] = useState({});
  const [loginLoading, setLoginLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const currentUser = useSelector((state) => state.currentUser);

  const dispatch = useDispatch();

  const displayResponseSnackbar = (response) => {
    if(response.status === 201) {
      enqueueSnackbar("logged", {variant: getVariantFromStatus( response.status )});
    }
    else{
      enqueueSnackbar(response.statusText, {variant: getVariantFromStatus( response.status )});
    }

  }

  const getVariantFromStatus = (status) => {
    return status === 400 ? "error" : status === 401 ? "error" : status === 201 ? "success" : "default";
  }

  const login = () => {
    setLoginLoading(true);
    axios.post('/auth/login', {
      ...formData
    })
    .then((response) => {
      dispatch(setCurrentUser(response.data));
      console.log("to", response);
      displayResponseSnackbar(response);
 
    })
    .catch((error) => {
      console.log(error);
      displayResponseSnackbar(error.response);
    })
    .finally(()=>{
      setLoginLoading(false);
    })
  }

  const imgSkeleton = (
    <Skeleton variant="rectangular" width={"100%"} height={410} />
  );

 
  return (
    <>
      <Grid xs={12}>
        <Stack spacing={2} sx={{ display: "block", mb: 2 }}>
          <span>{JSON.stringify(currentUser)}</span>
          <Breadcrumbs />
        </Stack>
      </Grid>
      <Grid xs={6}>
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
            <InputTypeText onChange={(event)=>{setFormData({...formData, username: event.target.value})}} label="Login" />
            <InputTypePassword onChange={(event)=>{setFormData({...formData, password: event.target.value})}} label="Password" />
          </CardContent>
          <CardActions sx={{ justifyContent: "flex-end", m: 1 }}>
            <Button sx={{ pr: 3 }} variant="text">
              Password reset
            </Button>
            <LoadingButton 
              loading={loginLoading}
              loadingPosition="end"
              endIcon={<LoginIcon />}
              variant="contained" 
              onClick={login}
              sx={{ pl: 1 }}
            >
              Login
              </LoadingButton>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
}

export default memo(LoginView);
