import { Breadcrumbs as MuiBreadcrumbs, Typography } from "@mui/material";
import { NavigateNext as NavigateNextIcon } from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Breadcrumbs(props) {
  const link = useLocation();
  let splitPathName = [];
  const [arrayLinkElements, setArrayLinkElements] = useState();
  const [breadcrumbs, setBreadcrumbs] = useState([]);
  useEffect(() => {
    splitPathName = link.pathname.split("/");
    if (splitPathName.length > 0 && !splitPathName[splitPathName.length - 1])
      splitPathName.pop();
    setArrayLinkElements(
      splitPathName.map((el) => {
        let predecessorName = splitPathName[splitPathName.indexOf(el) - 1];
        let index = splitPathName.indexOf(el);
        let isUser = splitPathName[1] === "profile" && index === 2;
        let is = {
          task: predecessorName === "tasks",
          project: predecessorName === "projects",
          user: isUser,
        };
        return {
          id: index,
          isTask: predecessorName === "tasks",
          isProject: predecessorName === "projects",
          hasRoute: hasRoute(splitPathName, index),
          isUser: isUser,
          pathName: index === 0 ? "home" : el,
          name: is.project
            ? getProjectName(el)
            : is.task
            ? getTaskName(el)
            : is.user
            ? getFullName(el)
            : index === 0
            ? t("home")
            : t(el),
          fullPath: getFullPath(splitPathName, index),
        };
      })
    );
  }, [link]);

  useEffect(() => {
    if (props.onRouteDataChange) props.onRouteDataChange(arrayLinkElements);
    if (arrayLinkElements) {
      setBreadcrumbs(
        arrayLinkElements.map((el) => {
          return el.hasRoute ? (
            <Link
              key={el.id}
              to={el.fullPath}
              style={{ textDecoration: "none", color: "gray" }}
            >
              {el.name}
            </Link>
          ) : (
            <span
              key={el.id}
              style={
                el.id === arrayLinkElements.length - 1
                  ? { fontWeight: "bold" }
                  : { cursor: "not-allowed" }
              }
            >
              {el.name}
            </span>
          );
        })
      );
    }
  }, [arrayLinkElements]);

  const getFullPath = (arrLocation, id) => {
    let fullPath = "";
    for (let i = 0; i <= id; i++) fullPath += `${arrLocation[i]}/`;
    return fullPath;
  };
  const disabledPaths = ["profile"];

  const hasRoute = (splitPathName, index) => {
    return disabledPaths.includes(splitPathName[index]) ||
      splitPathName.length - 1 === index
      ? false
      : true;
  };

  const t = (text) => {
    const lang = "eng";
    const dictionary = [
      { text: "home", translation: { eng: "Home", pl: "Strona główna" } },
      { text: "projects", translation: { eng: "Projects", pl: "Projekty" } },
      { text: "tasks", translation: { eng: "Tasks", pl: "Zadania" } },
      { text: "register", translation: { eng: "Register", pl: "Rejestracja" } },
      { text: "profile", translation: { eng: "Profile", pl: "Profil" } },
      {
        text: "basic-data",
        translation: { eng: "Basic data", pl: "Podstawowe dane" },
      },
      {
        text: "profile-avatar",
        translation: { eng: "Profile avatar", pl: "Zdjęcie profilowe" },
      },
      {
        text: "change-password",
        translation: { eng: "Change password", pl: "Zmień hasło" },
      },
      { text: "stats", translation: { eng: "Stats", pl: "Statystyki" } },
      {
        text: "create-team",
        translation: { eng: "Create team", pl: "Stwórz zespół" },
      },
      {
        text: "login",
        translation: { eng: "Login", pl: "Logowanie" },
      },
      {
        text: "register",
        translation: { eng: "Register", pl: "Rejestracja" },
      },
      {
        text: "create-task",
        translation: { eng: "Create task", pl: "Stwórz zadanie" },
      },
    ];
    let t = dictionary.filter((el) => {
      return el.text === text;
    });

    return t.length ? t[0].translation[lang] : text;
  };

  const getTaskName = (path) => {
    return path;
  };
  const getProjectName = (path) => {
    return path;
  };

  const getFullName = (path) => {
    return path;
  };

  return (
    <MuiBreadcrumbs
      separator={<NavigateNextIcon fontSize="small" />}
      aria-label="breadcrumb"
    >
      {breadcrumbs}
    </MuiBreadcrumbs>
  );
}
