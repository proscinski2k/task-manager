import Menu from "../../components/Views/Profile/Menu";
import Grid from "@mui/system/Unstable_Grid";
import { Routes, Route, useLocation } from "react-router-dom";
import BasicData from "./BasicData/BasicData";
import ChangePassword from "./ChangePassword/ChangePassword";
import ProfileAvatar from "./ProfileAvatar/ProfileAvatar";
import Stats from "./Stats/Stats";
import WhatToDoImg from "../../assets/images/what_to_do.jpg";
import { useEffect } from "react";
import { Card, CardContent } from "@mui/material";

export default function Profile() {
  const content = (
    <Routes>
      <Route path="basic-data" element={<BasicData />} />
      <Route path="change-password" element={<ChangePassword />} />
      <Route path="profile-avatar" element={<ProfileAvatar />} />
      <Route path="stats" element={<Stats />} />
    </Routes>
  );

  const WhatDoYouWantToDo = () => {
    return (
      <CardContent>
        <h2>What do you want to do?</h2>
        <p>Select from the left menu</p>
        <Grid xs={8} md={4} sx={{ margin: "0 auto" }}>
          <img
            style={{ width: "100%" }}
            src={WhatToDoImg}
            alt="What do you want to do?"
          />
        </Grid>
      </CardContent>
    );
  };

  const { pathname } = useLocation();

  useEffect(() => {
    console.log(pathname);
  }, [pathname]);

  const isProfile = () => {
    return pathname === "/profile" || pathname === "/profile/";
  };

  return (
    <>
      <Grid lg={3} md={4} xs={12}>
        <Menu />
      </Grid>
      <Grid lg={9} md={8} xs={12}>
        <Card>
          {isProfile() ? (
            <WhatDoYouWantToDo />
          ) : (
            <>
              <CardContent>{content}</CardContent>
            </>
          )}
        </Card>
      </Grid>
    </>
  );
}
