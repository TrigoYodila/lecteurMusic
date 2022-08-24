import { globalData } from "./userContext";
import SpotifyWebApi from "spotify-web-api-js";
import { useContext, useState, useEffect } from "react";
import "../styles/playlist.css";
import "../styles/recents.css";
import { DashContext } from "./DashboardUseContext";
import "../styles/trackplaylist.css";

const spotify = new SpotifyWebApi();

export default function TrackPlaylist() {
  const { token } = useContext(globalData);
  const [playlisttrack, setPlaylistTrack] = useState([]);
  const { userid, setUserid, playlistid, setPlaylistid } =
    useContext(DashContext);

  spotify.setAccessToken(token);

  useEffect(() => {
    setTimeout(() => {
      spotify
        .getPlaylistTracks(playlistid)
        .then((data) => {
          console.log("Liste Playlist", data.items);
          setPlaylistTrack(data.items);
        })
        .catch((err) => {
          console.error(err);
        });
    }, 2000);
  }, []);

  return (
    <div container-play-track>
      <div className="banniere-playlist">
        <div className="playlist">Playlist</div>
        <div className="title-playlist"></div>
        <div className="count-track"></div>
      </div>
      <div className="table-track">
        <div className="table-header">
          <h2>#</h2>
          <h2>titre</h2>
          <h2>Durée</h2>
          <h2>Album</h2>
        </div>
        <div className="table-contain">
          <h2>#</h2>
          <div className="title-image">
            <h2>titre</h2>
            <img src="" />
          </div>
          <h2>Durée</h2>
          <h2>Album</h2>
        </div>
      </div>
    </div>
  );
}
