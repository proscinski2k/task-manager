import Menu from "../../components/Views/Profile/Menu";
import Grid from "@mui/system/Unstable_Grid";
import { Routes, Route, useLocation } from "react-router-dom";
import BasicData from "../../components/Views/Profile/BasicData/BasicData";
import ChangePassword from "../../components/Views/Profile/ChangePassword/ChangePassword";
import ProfileAvatar from "../../components/Views/Profile/ProfileAvatar/ProfileAvatar";
import Stats from "../../components/Views/Profile/Stats/Stats";
import WhatToDoImg from "../../assets/images/what_to_do.jpg";
import { useEffect } from "react";

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
      <>
        <h2>What do you want to do?</h2>
        <p>Select from the left menu</p>
        <Grid xs={8} md={4} sx={{ margin: "0 auto" }}>
          <img
            style={{ width: "100%" }}
            src={WhatToDoImg}
            alt="What do you want to do?"
          />
        </Grid>
      </>
    );
  };

  const { pathname } = useLocation();

  useEffect(() => {
    console.log(pathname);
  }, [pathname]);

  return (
    <>
      <Grid lg={3} md={4} xs={12}>
        <Menu />
      </Grid>
      <Grid lg={9} md={8} xs={12}>
        {pathname === "/profile" || pathname === "/profile/" ? (
          <WhatDoYouWantToDo />
        ) : (
          content
        )}
      </Grid>
    </>
  );
}
