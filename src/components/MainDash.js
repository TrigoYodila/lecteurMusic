import DashSearch from "./DashSearch";
import Recents from "./Recents";
import NewsReleases from "./NewsReleases";
import { useContext, useState } from "react";
import SearchSongs from "./SearchSongs";
import "../styles/maindash.css";

export default function MainDash() {
  const [change, setChange] = useState(false);
  const [search, setSearch] = useState([]);

  

  return (
    <div className="container-main">
      <DashSearch setChange={setChange} setSearch={setSearch} />
      {change ? (
        <SearchSongs search={search} />
      ) : (
        <div>
          {" "}
          <Recents /> <NewsReleases />{" "}
        </div>
      )}
    </div>
  );
}
