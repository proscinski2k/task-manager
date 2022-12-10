import { useParams } from "react-router-dom";

export default function Task(props) {
  const { id } = useParams();
  return <div>Task {id}</div>;
}
