import { globalData } from "./userContext";
import SpotifyWebApi from "spotify-web-api-js";
import { useContext, useState, useEffect } from "react";
import "../styles/playlist.css";
import "../styles/recents.css";
import { DashContext } from "./DashboardUseContext";
import "../styles/trackplaylist.css";

const spotify = new SpotifyWebApi();

export default function TrackPlaylist({ playlistid }) {
  const { token } = useContext(globalData);
  const [playlisttrack, setPlaylistTrack] = useState([]);
  const { userid, setUserid, setPlaylistid } = useContext(DashContext);

  spotify.setAccessToken(token);
  console.log("PLAYLIST ID", playlistid);
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
  }, [playlistid]);

  return (
    <div className="container-play-track">
      <div className="banniere-playlist">
        <div className="playlist">Playlist</div>
        <div className="title-playlist">Titre Playlist</div>
        <div className="titre-count">
          <div className="count-track">{playlisttrack.length} Titres</div>
          <div className="name-user">Par {userid.name}</div>
        </div>
      </div>
      <div className="table-track">
        <div className="table-header">
          <h2>#</h2>
          <h2>Titre</h2>
          <h2>Durée</h2>
          <h2>Album</h2>
        </div>
        {playlisttrack.map((item, index) => {
          return (
            <div className="table-contain title">
              <div>{index + 1}</div>
              <div className="title-image">
                <img src="" />
                <div className="title">{item.track.name}</div>
              </div>
              <div className="title"></div>
              <div className="title">{item.track.album.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
