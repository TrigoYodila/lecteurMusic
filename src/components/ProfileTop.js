import "../styles/profiletop.css";
import { useContext, useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import { globalData } from "./userContext";
import { HiMenu } from "react-icons/hi";
import { DashContext } from "./DashboardUseContext";

const spotify = new SpotifyWebApi();

export default function ProfileTop() {
  const { token } = useContext(globalData);
  const {display,setDisplay} = useContext(DashContext);

  console.log("token profile", token);
  const [user, setUser] = useState({});

  spotify.setAccessToken(token);

  useEffect(() => {
    spotify
      .getMe()
      .then((data) => {
        setUser({
          name: data.display_name,
          email: data.email,
          image: data.images.length !== 0 ? data.images[0].url : "",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, [token]);

  return (
    <div className="top">
      <button className="menu-btn" onClick={()=>setDisplay(!display)}>
        <span>
          <HiMenu />
        </span>
      </button>
      <div className="profile">
        <div className="info">
          <p>{user.name}</p>
        </div>
        <div className="profile-photo">
          <img src={user.image} />
        </div>
      </div>
    </div>
  );
}
