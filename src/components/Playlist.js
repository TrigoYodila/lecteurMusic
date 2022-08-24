import { globalData } from "./userContext";
import SpotifyWebApi from "spotify-web-api-js";
import { useContext, useState, useEffect } from "react";
import "../styles/playlist.css";
import "../styles/recents.css";
import { DashContext } from "./DashboardUseContext";

const spotify = new SpotifyWebApi();

export default function Playlist({
  setClickedplay,
  playlistid,
  setPlaylistid,
}) {
  const { token } = useContext(globalData);
  const [playlist, setPlaylist] = useState([]);
  const { userid, setUserid,setPlaylistname } = useContext(DashContext);

  spotify.setAccessToken(token);
  console.log("JE SUIS USER", userid.id);

  useEffect(() => {
    setTimeout(() => {
      spotify
        .getUserPlaylists()
        .then((data) => {
          console.log("Playlist", data.items);
          setPlaylist(data.items);
        })
        .catch((err) => {
          console.log(err);
        });
    }, 2000);
  }, []);
  //gérer changement icone play

  function handleClicked(item) {
    setClickedplay(false);
    // console.log("BONKOUR")
    setPlaylistid(item.id);
    setPlaylistname(item.name)
  }
  // console.log("clicked", clickedplay);
  console.log("Mes playlist", userid.id);
  return (
    <div>
      <div className="title-card">
        <h1 className="title">PlayLists</h1>
      </div>
      <div className="recents-card">
        {playlist.map((item) => {
          return (
            <div className="recent-item">
              <img src={item.images[0].url} />
              <div className="track-name-title">
                <div className="name-track" style={{ marginBottom: "0.5rem" }}>
                  {item.name === undefined ? "ICI" : item.name}
                </div>
                <div className="title-track">Par {userid.name}</div>
              </div>
              <div className="play" onClick={() => handleClicked(item)}>
                <div className="arrow-right"></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
