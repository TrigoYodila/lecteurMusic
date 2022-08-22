import DashSearch from "./DashSearch";
import Recents from "./Recents";
import NewsReleases from "./NewsReleases";
import { useState } from "react";
import SearchSongs from "./SearchSongs";

export default function MainDash() {
  const [change, setChange] = useState(false);
  const [search, setSearch] = useState([]);


  // console.log(uritrack);
  
  return (
    <div>
      <DashSearch setChange={setChange} setSearch={setSearch} />
      {change ? (
        <SearchSongs search={search}/>
      ) : (
        <>
          {" "}
          <Recents /> <NewsReleases />{" "}
        </>
      )}
    </div>
  );
}
