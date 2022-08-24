import { useState, useEffect, useContext } from "react";
import "../styles/artist.css";
import SpotifyWebApi from "spotify-web-api-js";
import { globalData } from "./userContext";
import { DashContext } from "./DashboardUseContext";

const spotify = new SpotifyWebApi();

export default function Artist() {
  const { token } = useContext(globalData);
  const { artistid, setArtistid } = useContext(DashContext);

  spotify.setAccessToken(token);

  const [artist, setArtist] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      spotify.getMyTopArtists().then((data)=>{
        console.log("RELEASE", data);
          setArtist(data.items);
      }).catch((err)=>{
        console.error(err);
      })
    }, 2000);
  }, []);

  return (
    <div className="recent-updates">
      <h2>Artistes préferées</h2>
      <div className="updates">
        {artist.map((item) => {
          return (
            <div className="update" onClick={() => setArtistid(item.id)}>
              <div className="profile-photo">
                <img src={item.images[0].url} />
              </div>
              <div className="message">
                <p>{item.name}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
