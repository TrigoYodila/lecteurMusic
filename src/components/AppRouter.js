import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Dashboard from "./Dashboard";
import PageArtiste from "./PageArtiste";
import Playlists from "./Playlists";


export default function AppRouter() {
  return (
    <div>
      <Routes>
        <Route exec path="/" element={<Home />} />
        <Route exec path="dashboard" element={<Dashboard />} />
        <Route exec path="pageartiste" element={<PageArtiste />} />
        <Route exec path="playlists" element={<Playlists />} />
      </Routes>
    </div>
  );
}
