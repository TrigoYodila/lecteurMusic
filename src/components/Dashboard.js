import { useContext, useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import { globalData } from "./userContext";
import { DashContext } from "./DashboardUseContext";
import ProfileDash from "./ProfileDash";
import MainDash from "./MainDash";
import SidebarDash from "./SidebarDash";
import "../styles/dashboard.css";

export default function Dashboard() {
  const spotify = new SpotifyWebApi();
  const { token } = useContext(globalData);

  // const [user, setUser] = useState({});
  // const [recents, setRecents] = useState([]);

  // spotify.setAccessToken(token);
  // console.log("AVANT", recents);

  // useEffect(() => {
  //   setTimeout(() => {
  //     console.log("Token Dashboard ", token);
  //     spotify
  //       .getMe()
  //       .then((data) => {
  //         console.log(data);
  //         setUser({
  //           name: data.display_name,
  //           email: data.email,
  //           image: data.images.length !== 0 ? data.images[0].url : "",
  //         });
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });

  //     // spotify.getMyRecentlyPlayedTracks(function (err, data) {
  //     //   if (err) console.error(err);
  //     //   else {
  //     //     setRecents(data);
  //     //     // console.log("Artist albums", data.items[0].track.artists[0].name);
  //     //     // console.log("Data", data);
  //     //     // console.log("Artist albums", data.items[0].track.name);
  //     //   }
  //     // });
  //   }, 2000);
  // }, []);

  // console.log(
  //   "FONCTIONNE",
  //   recents.length !== 0 ? recents.items[0].track.name : "Artiste"
  // );
  // console.log(
  //   "url image",
  //   recents.length !== 0 ? recents.items[0].track.album.images[0].url : ""
  // );
  // //   console.log("APRES", recents);
  return (
    <div className="container">
      <SidebarDash />
      <MainDash />
      <ProfileDash />
    </div>
  );
}

//  <div>
//    <p>{recents.length !== 0 ? recents.items[0].track.name : "Artiste"}</p>
//    <p>{user.name}</p>
//    <img src={user.image} />
//    <p></p>
//    {/* <img src="https://i.scdn.co/image/ab67616d0000b273acaded4d2b3a8ba2252b854e" /> */}
//    <img
//      src={
//        recents.length !== 0 ? recents.items[0].track.album.images[0].url : ""
//      }
//    />
//  </div>;
