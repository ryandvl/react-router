import { Route, Routes } from "react-router";

import { Home } from "../pages/home";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" index element={<Home />} />
    </Routes>
  );
}
