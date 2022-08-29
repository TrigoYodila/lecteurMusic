import { useContext, useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import { globalData } from "./userContext";
import "../styles/trackplaylist.css";


export default function Playlists({ albumdata, isclicked, setIsClicked,trackuri, setTrackuri }) {
  const spotify = new SpotifyWebApi();
  const { token } = useContext(globalData);

  const [clickedplay, setClickedplay] = useState(true);
  const [playlist, setPlaylist] = useState([]);
  const [albumtrack, setAlbumTracks] = useState([]);

  const [trackplaylisturi, setTrackplaylisturi] = useState("");

  spotify.setAccessToken(token);

  useEffect(() => {
    spotify.getAlbumTracks(albumdata.id).then((data)=>{
        console.log("songs list",data)
        setAlbumTracks(data.items)
    })
  }, [token]);

  function TakedtrackUri(item) {
    setTrackuri(item.uri);
     console.log("voici mon uri", trackplaylisturi);
  }
  const millisToMinutesAndSeconds = (millis) => {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="container-play-track">
      <div className="banniere-playlist">
        <div className="image-bannere">
          <img src={albumdata.img} />
        </div>
        <div className="playlist">Album</div>
        <div className="title-playlist">{albumdata.name}</div>
        <div className="titre-count">
          <div className="count-track">{albumdata.titre} Titres</div>
          <div className="name-user">{albumdata.artist}</div>
        </div>
      </div>
      <div className="table-track">
        <table className="table">
          <thead>
            <tr>
              <th className="col">#</th>
              <th className="col">Titre</th>
              <th>Durée</th>
              <th className="col">Album</th>
            </tr>
          </thead>
          {albumtrack.map((item, index) => {
            return (
              <tbody>
                <tr onClick={() => TakedtrackUri(item)}>
                  <th className="col">{index + 1}</th>
                  <td className="col-image">
                    {item.name}
                  </td>
                  <td>{millisToMinutesAndSeconds(item.duration_ms)}</td>
                  <td className="col">{albumdata.name}</td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
}
