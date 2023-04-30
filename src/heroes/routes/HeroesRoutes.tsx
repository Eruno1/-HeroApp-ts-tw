import { Navigate, Route, Routes } from "react-router-dom";

import { Navbar } from "../../ui/components";
import { DcPage, HeroPage, MarvelPage, SearchPage } from "..";

export const HeroesRoutes: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="px-12 flex flex-col gap-2">
        <Routes>
          <Route element={<MarvelPage />} path="marvel" />
          <Route element={<DcPage />} path="dc" />
          <Route element={<SearchPage />} path="search" />
          <Route element={<HeroPage />} path="hero/:id" />
          <Route element={<Navigate to="/marvel" />} path="/" />
        </Routes>
      </div>
    </>
  );
};
