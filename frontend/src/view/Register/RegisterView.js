import InputTypeText from "../../components/Forms/InputTypeText";
import InputTypePassword from "../../components/Forms/InputTypePassword";
import Grid from "@mui/system/Unstable_Grid";
import LoginIcon from "@mui/icons-material/Login";
import registerImage from "../../assets/images/register.jpg";
import { Link } from "react-router-dom";
import {Add as AddIcon, Save as SaveIcon} from "@mui/icons-material";
import { memo, useState, forwardRef } from "react";
import {
  Skeleton,
  Stack,
  Button,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import axios from '../../axios/axios';

import LoadingButton from '@mui/lab/LoadingButton';

import { useSnackbar } from 'notistack';

function Register() {
  const registerNewUser = () => {
    setRegisterLoading(true);
    axios.post('/users/register', {
      ...formData
    })
    .then(function (response) {
      console.log(response);
      displayResponseSnackbar(response);
    })
    .catch(function (error) {
      console.log(error);
      displayResponseSnackbar(error.response);
    })
    .finally(()=>{
      setRegisterLoading(false);
    })
  }

  const imgSkeleton = (
    <Skeleton variant="rectangular" width={"100%"} height={410} />
  );

  const [loaded, setLoaded] = useState(false);
  const [registerLoading, setRegisterLoading] = useState(false);
  const [formData, setFormData] = useState({});

  const { enqueueSnackbar } = useSnackbar();

  const displayResponseSnackbar = (response) => {
    if(response.status === 201) {
      enqueueSnackbar(response.statusText, {variant: getVariantFromStatus( response.status )});
    }
    response.data.message.forEach(element => {
      enqueueSnackbar(element, {variant: getVariantFromStatus( response.status )});
    });

  }

  const getVariantFromStatus = (status) => {
    return status === 400 ? "error" : status === 201 ? "success" : "default";
  }

  return (
    <>
      <Grid xs={12}>
        <Stack spacing={2} sx={{ display: "block", mb: 2 }}>
          <Breadcrumbs />
        </Stack>
      </Grid>
      <Grid xs={6}>
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
            <InputTypeText onChange={(event)=>{setFormData({...formData, login: event.target.value})}} label="Login" />
            <InputTypeText onChange={(event)=>{setFormData({...formData, email: event.target.value})}} label="E-mail" />
            <InputTypeText onChange={(event)=>{setFormData({...formData, firstname: event.target.value})}} label="First Name" />
            <InputTypeText onChange={(event)=>{setFormData({...formData, lastname: event.target.value})}} label="Last name" />
            <InputTypePassword onChange={(event)=>{setFormData({...formData, password: event.target.value})}} label="Password" />
            <InputTypePassword onChange={(event)=>{setFormData({...formData, repeatPassword: event.target.value})}} label="Repeat password" />
          </CardContent>
          <CardActions sx={{ justifyContent: "flex-end", m: 1 }}>
            <Link to="/login" style={{ textDecoration: "none" }}>
              <Button sx={{ pr: 3 }} variant="text">
                Login page
              </Button>
            </Link>
            <LoadingButton 
              loading={registerLoading}
              loadingPosition="end"
              endIcon={<LoginIcon />}
              variant="contained" 
              onClick={registerNewUser}
              sx={{ pl: 1 }}
              >
                Register
              </LoadingButton>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
}

export default memo(Register);
