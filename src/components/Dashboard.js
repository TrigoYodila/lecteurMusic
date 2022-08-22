import { useContext, useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import { globalData } from "./userContext";
import { DashContext } from "./DashboardUseContext";
import ProfileDash from "./ProfileDash";
import MainDash from "./MainDash";
import SidebarDash from "./SidebarDash";
import "../styles/dashboard.css";
import SpotifyPlayer from "react-spotify-web-playback";

export default function Dashboard() {
  const spotify = new SpotifyWebApi();
  const { token } = useContext(globalData);
  
  const [trackuri,setTrackuri] = useState("")
  console.log("Track uri", trackuri);
  
  
  return (
    <div>
      <div className="container">
        <DashContext.Provider value={{ trackuri, setTrackuri }}>
          <SidebarDash />
          <MainDash />
          <ProfileDash />
        </DashContext.Provider>
      </div>
      <div className="player">
        <SpotifyPlayer
          styles={{
            activeColor: "#fff",
            bgColor: "#333",
            color: "#fff",
            loaderColor: "#fff",
            sliderColor: "#1cb954",
            trackArtistColor: "#ccc",
            trackNameColor: "#fff",
          }}
          token={token}
          uris={trackuri}
        />
      </div>
    </div>
  );
}

