import { globalData } from "./userContext";
import SpotifyWebApi from "spotify-web-api-js";
import { useContext, useState, useEffect } from "react";
import "../styles/playlist.css";
import "../styles/recents.css";
import { DashContext } from "./DashboardUseContext";
import "../styles/trackplaylist.css";

const spotify = new SpotifyWebApi();

export default function TrackPlaylist({ playlistid,playlist,playlistname,playlistimg}) {
  const { token } = useContext(globalData);
  const [playlisttrack, setPlaylistTrack] = useState([]);
  const { userid, setUserid, setPlaylistid,trackplaylisturi,setTrackplaylisturi} = useContext(DashContext);


  spotify.setAccessToken(token);
  console.log("PLAYLIST ID", playlistid);
  useEffect(() => {
      spotify
        .getPlaylistTracks(playlistid)
        .then((data) => {
          console.log("Liste Playlist", data.items);
          setPlaylistTrack(data.items);
        })
        .catch((err) => {
          console.error(err);
        });
  }, [playlistid]);
  console.log("PlaylistName",playlistname)
  console.log("MON IMAGE",playlistimg)

  function TakedtrackUri(item){
    setTrackplaylisturi(item.track.uri)
    console.log("voici mon uri", trackplaylisturi);
  }
  
  return (
    <div className="container-play-track">
      <div className="banniere-playlist">
        <div className="image-bannere">
          <img src={playlistimg} />
        </div>
        <div className="playlist">Playlist</div>
        <div className="title-playlist">{playlistname}</div>
        <div className="titre-count">
          <div className="count-track">{playlisttrack.length} Titres</div>
          <div className="name-user">Par {userid.name}</div>
        </div>
      </div>
      <div className="table-track">
        <table className="table">
          <thead>
            <tr>
              <th className="col">#</th>
              <th className="col">Titre</th>
              <th>Artiste</th>
              <th className="col">Album</th>
            </tr>
          </thead>
          {playlisttrack.map((item, index) => {
            return (
              <tbody>
                <tr onClick={() => TakedtrackUri(item)}>
                  <th className="col">{index + 1}</th>
                  <td className="col-image">
                    <img
                      src={item.track.album.images[0].url}
                      className="title-image"
                    />
                    {item.track.name}
                  </td>
                  <td>{item.track.artists[0].name}</td>
                  <td className="col">{item.track.album.name}</td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
}
