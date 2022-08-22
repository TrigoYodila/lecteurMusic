import { useContext, useState, useEffect } from "react";
import { MdPlayArrow } from "react-icons/md";
import "../styles/recents.css";
import { globalData } from "./userContext";
import SpotifyWebApi from "spotify-web-api-js";


const style = {
  marginBottom:"1rem"
};

const spotify = new SpotifyWebApi();

export default function Recents() {
  const { token } = useContext(globalData);

  const [recents, setRecents] = useState([]);

  spotify.setAccessToken(token);

   useEffect(() => {
     setTimeout(() => {
       spotify.getMyRecentlyPlayedTracks({limit:8},function (err, data) {
        if (err) console.error(err);
        else {
          console.log(data.items)
          setRecents(data.items);
          console.log("Artist albums", data.items[0].track.artists[0].name);
          // console.log("Data", data);
          console.log("Artist albums", data.items[0].track.name);
          console.log("url image ",data.items[0].track.album.images[0].url)
        }
      });
       
     }, 2000)
   }, []);
  
   console.log("externe",recents)
  return (
    <div style = {style}>
      <h1 className="title">Ecoutés Récemment</h1>
      <div className="recents-card">
        {recents.map((item)=>{
          // console.log("recents dans la fonction", recents)
         return (
           <div className="recent-item">
             <img src={item.track.album.images[0].url} />
             <div className="track-name-title">
               <div className="title-track">{item.track.name}</div>
               <div className="name-track">{item.track.artists[0].name}</div>
             </div>
             <div className="play">
               <div className="arrow-right"></div>
             </div>
           </div>
         );
        })}
      </div>
    </div>
  )
}
