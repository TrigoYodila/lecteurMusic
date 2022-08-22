import "../styles/profiletop.css";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useContext, useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import { globalData } from "./userContext";

const spotify = new SpotifyWebApi();

export default function ProfileTop() {
  
  const { token } = useContext(globalData);
  
  console.log("token profile", token)
  const [user, setUser] = useState({})
  

  spotify.setAccessToken(token);
  

  useEffect(() => {
    setTimeout(() => {
     
      spotify
        .getMe()
        .then((data) => {
          // console.log(data);
          setUser({
            name: data.display_name,
            email: data.email,
            image: data.images.length !== 0 ? data.images[0].url : "",
          });
        })
        .catch((error) => {
          console.log(error);
        });

       

    }, 2000);
  }, []);

   console.log(user);





  return (
    <div className="top">
      <div className="theme-toggler">
        <span className="active">
          <MdLightMode />
        </span>
        <span>
          <MdDarkMode />
        </span>
      </div>
      <div className="profile">
        <div className="info">
          <p>{user.name}</p>
        </div>
        <div className="profile-photo">
          <img src={user.image}/>
        </div>
      </div>
    </div>
  );
}
