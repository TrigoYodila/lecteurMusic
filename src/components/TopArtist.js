import { useState, useEffect, useContext } from "react";
import "../styles/recents.css";
import SpotifyWebApi from "spotify-web-api-js";
import { globalData } from "./userContext";
import { useParams } from "react-router-dom";

const spotify = new SpotifyWebApi();

export default function TopArtist({ artistid, setAlbumData,setIsClicked,isclicked }) {
  const { token } = useContext(globalData);
  spotify.setAccessToken(token);

  const [artist, setArtist] = useState([]);
  const {id} = useParams();


  useEffect(() => {
    spotify
      .getArtistAlbums(id)
      .then((data) => {
        setArtist(data.items);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id, token]);

  function getAlbumId(item) {
    setAlbumData({
      id:item.id,
      name:item.name,
      img:item.images[0].url,
      artist:item.artists[0].name,
      titre:item.total_tracks
    })
    setIsClicked(!isclicked)
  }

  console.log("album data",artist)
  return (
    <div>
      <div className="recents-card">
        {artist.map((item) => {
          return (
            <div
              className="recent-item item-album"
              onClick={() => getAlbumId(item)}
            >
              <img src={item.images[0].url} />
              <div
                className="name-track"
                style={{ marginTop: "1rem", marginBottom: "1rem" }}
              >
                {item.name}
              </div>
              <div className="titre-album" style={{ fontSize: "1rem" }}>
                {item.total_tracks} Titres
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
