import { useContext, useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import { globalData } from "./userContext";
import { DashContext } from "./DashboardUseContext";
import ProfileDash from "./ProfileDash";
import SidebarDash from "./SidebarDash";
import DashSearch from "./DashSearch";
import SearchSongs from "./SearchSongs";
import "../styles/dashboard.css";
import "../styles/pageartiste.css";
import "../styles/playlists.css";
import SpotifyPlayer from "react-spotify-web-playback";
import Playlist from "./Playlist";
import TrackPlaylist from "./TrackPlaylist";

export default function Playlists() {
  const spotify = new SpotifyWebApi();
  const { token } = useContext(globalData);

  const [playlistid, setPlaylistid] = useState("");
  const [userid, setUserId] = useState({
    name:"",
    id:""
  });
  const [artistid, setArtistid] = useState("");
  const [change, setChange] = useState(false);
  const [search, setSearch] = useState([]);
  const [clickedplay, setClickedplay] = useState(true);
  
  console.log(clickedplay);
  spotify.setAccessToken(token);
  console.log("JE SUIS USER 1", userid);

  useEffect(() => {
    setTimeout(() => {
      spotify
        .getMe()
        .then((data) => {
          // console.log(data);
          setUserId({
            name:data.display_name,
            id:data.id
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }, 2000);
  }, []);

  return (
    <div>
      <div className="container">
        <DashContext.Provider
          value={{
            setUserId,
            artistid,
            userid,
            setArtistid,
          }}
        >
          <SidebarDash />
          <div className="container-dash">
            <DashSearch setChange={setChange} setSearch={setSearch} />
            {change ? (
              <SearchSongs search={search} />
            ) : clickedplay ? (
              <Playlist playlistid={Playlist} setPlaylistid={setPlaylistid} setClickedplay={setClickedplay}/>
            ) : (
              <TrackPlaylist
                clickedplay={clickedplay}
                setClickedplay={setClickedplay} playlistid={playlistid}
              />
            )}
          </div>
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
          uris=""
        />
      </div>
    </div>
  );
}
