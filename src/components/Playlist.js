import { globalData } from "./userContext";
import SpotifyWebApi from "spotify-web-api-js";
import { useContext,useState,useEffect } from "react";

const spotify = new SpotifyWebApi();

export default function Playlist() {
  const { token } = useContext(globalData);
  const [playlist, setPlaylist] = useState([]);
  const [userid, setUserId] = useState("")

  spotify.setAccessToken(token);

   useEffect(() => {
     setTimeout(() => {
       spotify
         .getMe()
         .then((data) => {
           console.log(data);
           setUserId(data.id);
         })
         .catch((error) => {
           console.log(error);
         });
          spotify.getUserPlaylists(userid,function (err, data) {
            if (err) console.error(err);
            else {
              console.log("RELEASE", data);
            }
          });
     }, 2000);
   }, []);

  return <div></div>;
}