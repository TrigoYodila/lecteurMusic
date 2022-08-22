import { useContext, useState, useEffect } from "react";
import { MdPlayArrow } from "react-icons/md";
import "../styles/recents.css";
import { globalData } from "./userContext";
import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi();

export default function NewsReleases() {
  const { token } = useContext(globalData);

  const [releases, setReleases] = useState([]);

  spotify.setAccessToken(token);

   useEffect(() => {
     setTimeout(() => {
       spotify.getNewReleases( {limit:8},function (err, data) {
         if (err) console.error(err);
         else {
          //  console.log("RELEASE", data.albums.items[0].name);
           setReleases(data.albums.items);
          //  console.log("Artist albums", data.items[0].track.artists[0].name);
          //  // console.log("Data", data);
          //  console.log("Artist albums", data.items[0].track.name);
          //  console.log("url image ", data.items[0].track.album.images[0].url);
         }
       });
     }, 2000);
   }, []);
   console.log("new releases", releases)
  return (
    <div>
      <h1 className="title">Nouveautés</h1>
      <div className="recents-card">
        {releases.map((item) => {
          // console.log("recents dans la fonction", recents)
          return (
            <div className="recent-item">
              <img src={item.images[0].url} />
              <div className="track-name-title">
                <div className="title-track">{item.name}</div>
                <div className="name-track">{item.artists[0].name}</div>
              </div>
              <div className="play">
                <div className="arrow-right"></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
