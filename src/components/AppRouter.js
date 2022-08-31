import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Dashboard from "./Dashboard";
import PageArtiste from "./PageArtiste";
import Playlists from "./Playlists";
import { globalData } from "./userContext";
import { Navigate } from "react-router-dom";

export default function AppRouter() {
  const { token } = useContext(globalData);
  const usertoken = window.localStorage.getItem("token");

  return (
    <div>
      <Routes>
        <Route exec path="/" element={<Home />} />
        <Route exec path="dashboard" element={<Dashboard />} />
        <Route exec path="pageartiste" element={<PageArtiste />} />
        <Route exec path="pageartiste/:id" element={<PageArtiste />} />
        <Route exec path="playlists" element={<Playlists />} />
      </Routes>
    </div>
  );
}
