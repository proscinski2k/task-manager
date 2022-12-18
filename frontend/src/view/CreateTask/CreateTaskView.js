import { memo } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import CreateTask from "../../components/CreateTask/CreateTask";

function CreateTaskView() {
  return <CreateTask />;
}

export default memo(CreateTaskView);
