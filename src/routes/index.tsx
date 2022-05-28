import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "../components/layout";

const Home = React.lazy(() => import("../pages/home"));
const About = React.lazy(() => import("../pages/about"));

function AllRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about/:type/:id" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AllRoutes;
