import Box from "@mui/material/Box";
// import { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";

export default function Footer() {
  // const [rootHeight, setRootHeight] = useState(0);
  // const [footerHeight, setFooterHeight] = useState(0);
  // const [footerSpaceTop, setFooterSpaceTop] = useState(0);
  // const location = useLocation();

  // useEffect(() => {
  //   setRootHeight(document.getElementById("root").offsetHeight);
  //   setFooterHeight(document.getElementById("footer").offsetHeight);
  // }, []);

  // useEffect(() => {
  //   if (rootHeight < window.outerHeight)
  //     setFooterSpaceTop(window.outerHeight - rootHeight - footerHeight);
  // }, [footerHeight, rootHeight]);

  return (
    <Box
      id="footer"
      sx={{
        bgcolor: "primary.main",
        color: "#fff",
        py: 3,
        boxShadow: 3,
        // mt: `${footerSpaceTop}px`,
      }}
    >
      <div>Project © 2022 Adrian Prościński</div>
      <div>
        <a href="https://www.freepik.com/free-vector/access-control-system-abstract-concept_12085707.htm#query=login&position=1&from_view=keyword">
          Images by vectorjuice
        </a>
      </div>
    </Box>
  );
}
