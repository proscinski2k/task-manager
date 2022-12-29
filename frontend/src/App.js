import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header";
import Layout100 from "./components/Layout/Layout1";
import Footer from "./components/Footer/Footer";

import HomeView from "./view/Home/HomeView";
import ProfileView from "./view/Profile/ProfileView";
import TaskView from "./view/Task/TaskView";
import RegisterView from "./view/Register/RegisterView";
import LoginView from "./view/Login/LoginView";
import PageNotFoundView from "./view/PageNotFound/PageNotFoundView";
import CreateTaskView from "./view/CreateTask/CreateTaskView";
import CreateTeamView from "./view/CreateTeam/CreateTeamView";
import ProjectsView from "./view/Projects/ProjectsView";
import ProjectView from "./view/Project/ProjectView";
import ProjectTasksView from "./view/ProjectTasks/ProjectTasksView";
import { SnackbarProvider } from 'notistack';

import "./App.css";

function App() {
  const content = (
    <Routes>
      <Route path="/create-team" element={<CreateTeamView />} />
      <Route path="/create-task" element={<CreateTaskView />} />
      <Route path="/profile/:user/*" element={<ProfileView />} />
      <Route path="/projects" element={<ProjectsView />} />
      <Route path="/projects/:projectTitle" element={<ProjectView />} />
      <Route
        path="/projects/:projectTitle/tasks"
        element={<ProjectTasksView />}
      />
      <Route
        path="/projects/:projectTitle/create-task"
        element={<CreateTaskView />}
      />
      <Route path="/projects/:projectTitle/tasks/:id" element={<TaskView />} />
      <Route path="/register" element={<RegisterView />} />
      <Route path="/login" element={<LoginView />} />
      <Route path="/" element={<HomeView />} />
      <Route path="*" element={<PageNotFoundView />} />
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
        <SnackbarProvider 
          maxSnack={8} 
          autoHideDuration={4000}  
        >
          <Layout100 header={<Header />} content={content} footer={<Footer />} />
        </SnackbarProvider>
      </Router>
    </div>
  );
}

export default App;
