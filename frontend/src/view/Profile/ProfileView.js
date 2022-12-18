import Menu from "../../components/Views/Profile/Menu";
import Grid from "@mui/system/Unstable_Grid";
import { Routes, Route } from "react-router-dom";
import BasicDataView from "./BasicData/BasicDataView";
import ChangePasswordView from "./ChangePassword/ChangePasswordView";
import ProfileAvatarView from "./ProfileAvatar/ProfileAvatarView";
import StatsView from "./Stats/StatsView";
import WhatToDoImg from "../../assets/images/what_to_do.jpg";
import { useState } from "react";
import { Card, CardContent, Stack } from "@mui/material";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";

export default function Profile() {
  const content = (
    <Routes>
      <Route path="basic-data" element={<BasicDataView />} />
      <Route path="change-password" element={<ChangePasswordView />} />
      <Route path="profile-avatar" element={<ProfileAvatarView />} />
      <Route path="stats" element={<StatsView />} />
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

  const [isProfile, setIsProfile] = useState(true);

  const eventSetRouteData = (data) => {
    if (data) setIsProfile(data.at(-1).isUser);
  };

  return (
    <>
      <Grid xs={12}>
        <Stack spacing={2} sx={{ display: "block", mb: 2 }}>
          <Breadcrumbs onRouteDataChange={eventSetRouteData} />
        </Stack>
      </Grid>
      <Grid lg={3} md={4} xs={12}>
        <Menu />
      </Grid>
      <Grid lg={9} md={8} xs={12}>
        <Card>
          {isProfile ? (
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
