import pageNotFoundImg from "../../assets/images/not_found.jpg";
import Grid from "@mui/system/Unstable_Grid";
import Skeleton from "@mui/material/Skeleton";
import { useState } from "react";

export default function PageNotFound() {
  const [imgLoaded, setImgLoaded] = useState(false);

  const imgSkeleton = (
    <Skeleton variant="rectangular" width={"100%"} height={410} />
  );
  return (
    <>
      <Grid xs={3}></Grid>
      <Grid xs={6}>
        {!imgLoaded ? imgSkeleton : null}
        <img
          style={{
            width: "100%",
            display: imgLoaded ? "block" : "none",
          }}
          onLoad={() => {
            setImgLoaded(true);
          }}
          src={pageNotFoundImg}
          alt="Error 404: Page not found"
        />
      </Grid>
      <Grid xs={3}></Grid>
    </>
  );
}
