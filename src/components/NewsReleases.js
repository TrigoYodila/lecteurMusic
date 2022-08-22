import { useContext, useState, useEffect } from "react";
import "../styles/recents.css";
import { globalData } from "./userContext";
import SpotifyWebApi from "spotify-web-api-js";
import { DashContext } from "./DashboardUseContext";

const spotify = new SpotifyWebApi();

export default function NewsReleases() {
  const { token } = useContext(globalData);

  const [releases, setReleases] = useState([]);
  const [clicked, setClicked] = useState(true);
  const { trackuri, setTrackuri } = useContext(DashContext);

  spotify.setAccessToken(token);

   useEffect(() => {
     setTimeout(() => {
       clicked
         ? spotify.getNewReleases({ limit: 4 }, function (err, data) {
             if (err) console.error(err);
             else {
               //  console.log("RELEASE", data.albums.items[0].name);
               setReleases(data.albums.items);
             }
           })
         : spotify.getNewReleases( function (err, data) {
             if (err) console.error(err);
             else {
               //  console.log("RELEASE", data.albums.items[0].name);
               setReleases(data.albums.items);
             }
           });
     }, 1000);
   }, [clicked]);
  //  console.log("new releases", releases)


   function handleClicked() {
     setClicked(!clicked);
   }


  return (
    <div>
      <div className="title-card">
        <h1 className="title">Nouveautés</h1>
        <span className="voir-plus" onClick={handleClicked}>
          Voir plus...
        </span>
      </div>
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
              <div className="play" onClick={() => setTrackuri(item.uri)}>
                <div className="arrow-right"></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
