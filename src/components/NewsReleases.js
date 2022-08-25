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
       clicked
         ? spotify
             .getNewReleases({ limit: 4 })
             .then((data) => {
               //  console.log("RELEASE", data.albums.items[0].name);
               setReleases(data.albums.items);
             })
             .catch((err) => {
               console.error(err);
             })
         : spotify
             .getNewReleases()
             .then((data) => {
               //  console.log("RELEASE", data.albums.items[0].name);
               setReleases(data.albums.items);
             })
             .catch((err) => {
               console.error(err);
             }); 
   }, [clicked,token]);
  //  console.log("new releases", releases)

   function handleClicked() {
     setClicked(!clicked);
   }

  return (
    <div>
      <div className="title-card">
        <h1 className="title">Nouveautés</h1>
        <span className="voir-plus" onClick={handleClicked}>
          {clicked ? "Voir plus" : "Voir moins"}
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
