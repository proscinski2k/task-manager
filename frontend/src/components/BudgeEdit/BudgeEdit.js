import { useState } from "react";
import { Badge } from "@mui/material";

export default function BudgeEdit(props) {
  const [titleBudgeInvisible, setTitleBudgeInvisible] = useState(true);
  return (
    <Badge
      style={{ cursor: "pointer" }}
      onMouseEnter={() => {
        setTitleBudgeInvisible(false);
      }}
      onMouseLeave={() => {
        setTitleBudgeInvisible(true);
      }}
      badgeContent="EDIT"
      color="primary"
      invisible={titleBudgeInvisible}
    >
      {props.children}
    </Badge>
  );
}
