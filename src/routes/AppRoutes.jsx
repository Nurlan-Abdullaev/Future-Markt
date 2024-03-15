import { AboutMe } from "../components/main/routeMain/AboutMe";
import { Mentoring } from "../components/main/routeMain/Mentoring";
import { Events } from "../components/main/routeMain/Events";
import { Cases } from "../components/main/routeMain/Cases";
import { Reviews } from "../components/main/routeMain/Reviews";
import { Contacts } from "../components/main/routeMain/Contacts";
import { Route, Routes } from "react-router-dom";
import { Main } from "../components/main/Main";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/aboutMe" element={<AboutMe />} />
      <Route path="/mentoring" element={<Mentoring />} />
      <Route path="/events" element={<Events />} />
      <Route path="/cases" element={<Cases />} />
      <Route path="/reviews" element={<Reviews />} />
      <Route path="/contacts" element={<Contacts />} />
    </Routes>
  );
};
