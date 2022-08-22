import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Dashboard from "./Dashboard";
import SearchSongs from "./SearchSongs";

export default function AppRouter() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="dashboard" element={<Dashboard />} />
        {/* <Route path="searchsongs" element={<SearchSongs />} /> */}
      </Routes>
    </div>
  );
}
