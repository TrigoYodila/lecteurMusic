import { useState, useEffect, useContext } from "react";
import "../styles/artist.css";
import SpotifyWebApi from "spotify-web-api-js";
import { globalData } from "./userContext";

const spotify = new SpotifyWebApi();

export default function Artist() {
  const { token } = useContext(globalData);
  spotify.setAccessToken(token);

  const [artist, setArtist] = useState([]);
  const [artistname, setArtistname] = useState({})

  useEffect(() => {
    setTimeout(() => {
      spotify.getMyTopArtists(function (err, data) {
        if (err) console.error(err);
        else {
          console.log("RELEASE", data);
          setArtist(data.items);
          setArtistname(data.items.name);
          //  console.log("Artist albums", data.items);
          //  // console.log("Data", data);
          //  console.log("Artist albums", data.items[0].track.name);
          //  console.log("url image ", data.items[0].track.album.images[0].url);
        }
      });
    }, 2000);
  }, []);

  return (
    <div className="recent-updates">
      <h2>Artistes préferées</h2>
      <div className="updates">
        {artist.map((item) => {
          return (
            <div className="update">
              <div className="profile-photo">
                <img src={item.images[0].url} />
              </div>
              <div className="message">
                <p>{item.name}</p>
                <span className="text-muted">2O chansons</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
