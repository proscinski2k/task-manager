import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./view/Home/Home";
import Header from "./components/Header/Header";
import Profile from "./view/Profile/Profile";
import Task from "./view/Task/Task";
import Register from "./view/Register/Register";
import Login from "./view/Login/Login";
import PageNotFound from "./view/PageNotFound/PageNotFound";
import Layout100 from "./components/Layout/Layout1";
import Footer from "./components/Footer/Footer";
import CreateTask from "./view/CreateTask/CreateTask";
import CreateTeam from "./view/CreateTeam/CreateTeam";

import "./App.css";

function App() {
  const content = (
    <Routes>
      <Route path="/create-team" element={<CreateTeam />} />
      <Route path="/create-task" element={<CreateTask />} />
      <Route path="/profile/*" element={<Profile />} />
      <Route path="/tasks/:id" element={<Task />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );

  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Home />,
  //     errorElement: <PageNotFound />,
  //   },
  //   {
  //     path: "/profile",
  //     element: <Profile />,
  //     errorElement: <PageNotFound />,
  //     children: [
  //       {
  //         path: "profile/basic-data",
  //         element: <BasicData />,
  //       },
  //       {
  //         path: "profile/change-password",
  //         element: <ChangePassword />,
  //       },
  //       {
  //         path: "profile/profile-avatar",
  //         element: <ProfileAvatar />,
  //       },
  //     ],
  //   },
  // ]);

  return (
    <div className="App">
      <Router>
        <Layout100 header={<Header />} content={content} footer={<Footer />} />
      </Router>
    </div>
  );
}

export default App;
