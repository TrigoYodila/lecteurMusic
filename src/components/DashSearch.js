import { useState,useContext } from "react";
import { FiSearch } from "react-icons/fi";
import "../styles/dashsearch.css";
import SpotifyWebApi from "spotify-web-api-js";
import { globalData } from "./userContext";

const spotify = new SpotifyWebApi();

export default function DashSearch({ setChange, setSearch}) {
  const { token } = useContext(globalData);

  const searchSong = (e) => {
    // spotify.searchTracks()
    spotify.searchTracks(e.target.value, function (err, data) {
      if (err) console.error(err);
      else {
        console.log("RECHERCHE", data);
         console.log("RECHERCHE", data.tracks.items);
        setSearch(data.tracks.items)
        console.log("BONJOUR MAMAN")
      }
    });

    if (e.target.value.length !== 0) {
      setChange(true);
    } else {
      setChange(false);
    }
  };

  return (
    <div className="search-header">
      <div className="input">
        <span>
          <FiSearch />
        </span>
        <input
          type="text"
          placeholder="Chanson, album..."
          onChange={searchSong}
        />
      </div>
    </div>
  );
}
