import { Route, Routes } from "react-router-dom";

import { LoginPage } from "../auth";
import { HeroesRoutes } from "../heroes";

export const AppRouter: React.FC = () => {
  return (
    <>
      <Routes>
        <Route element={<LoginPage />} path="/login" />
        <Route element={<HeroesRoutes />} path="/*" />
      </Routes>
    </>
  );
};
