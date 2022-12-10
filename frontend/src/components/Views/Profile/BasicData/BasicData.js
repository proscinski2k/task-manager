import InputTypeText from "../../../Forms/InputTypeText";
import { useState } from "react";

export default function BasicData() {
  const [yourData] = useState({
    login: "Adrian2000",
    firstName: "Adrian",
    lastName: "Prościński",
  });
  return (
    <>
      <InputTypeText label="Login" value={yourData.login} />
      <InputTypeText label="Name" value={yourData.firstName} />
      <InputTypeText label="Last name" value={yourData.lastName} />
    </>
  );
}
