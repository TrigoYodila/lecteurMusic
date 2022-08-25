import { useState, useEffect, useContext } from "react";
// import "../styles/artist.css";
import "../styles/recents.css";
import SpotifyWebApi from "spotify-web-api-js";
import { globalData } from "./userContext";
import { DashContext } from "./DashboardUseContext";


const spotify = new SpotifyWebApi();

export default function TopArtist({artistid}) {
  const { token } = useContext(globalData);
  // const {artistid} = useContext(DashContext);
  spotify.setAccessToken(token);

  const [artist, setArtist] = useState([]);
  
  console.log("My Artist", artistid)

  useEffect(() => {
      spotify.getArtistAlbums(artistid).then((data)=>{
        console.log("Album Artist", data);
          console.log("TATAT")
          setArtist(data.items);
      }).catch((err)=>{
        console.error(err)
      })
  
  }, [artistid]);

  return (
    <div>
      <div className="recents-card">
       
        {artist.map((item) => {
          return (
            <div className="recent-item">
              <img src={item.images[0].url} />
              <div className="name-track" style={{ marginTop: "1rem",marginBottom:"1rem" }}>
                {item.name}
              </div>
              <div className="titre-track" style={{fontSize:"1rem"}}>Album</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
