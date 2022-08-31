import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SpotifyWebApi from "spotify-web-api-js";
import { globalData } from "./userContext";
import { DashContext } from "./DashboardUseContext";
import ProfileDash from "./ProfileDash";
import SidebarDash from "./SidebarDash";
import DashSearch from "./DashSearch";
import SearchSongs from "./SearchSongs";
import "../styles/dashboard.css";
import "../styles/pageartiste.css";
import SpotifyPlayer from "react-spotify-web-playback";
import TopArtist from "./TopArtist";
import PlayTrack from "./PlayTrack";

export default function PageArtiste() {
  const spotify = new SpotifyWebApi();
  const { token } = useContext(globalData);

  const [trackuri, setTrackuri] = useState("");
  const [userid, setUserId] = useState("");
  const [artistid, setArtistid] = useState("");
  const [change, setChange] = useState(false);
  const [search, setSearch] = useState([]);
  const [isclicked, setIsClicked] = useState(false);
  const [albumdata, setAlbumData] = useState({
    id: "",
    name: "",
    img: "",
    artist:"",
    titre:""
  });
const [play, setPlay] = useState(false);
const [display, setDisplay] = useState(false);

  const {id} = useParams();

  console.log("Track uri", trackuri);

  spotify.setAccessToken(token);

  useEffect(() => {
    setTimeout(() => {
      spotify
        .getMe()
        .then((data) => {
          // console.log(data);
          setUserId(data.id);
        })
        .catch((error) => {
          console.log(error);
        });
    }, 1000);
  }, [token]);

  return (
    <div>
      <div className="container">
        <DashContext.Provider
          value={{
            trackuri,
            setTrackuri,
            userid,
            setUserId,
            artistid,
            setArtistid,
            play,
            setPlay,
            display,
            setDisplay,
          }}
        >
          <SidebarDash />
          <div className="container-dash">
            <DashSearch setChange={setChange} setSearch={setSearch} />
            {change ? (
              <SearchSongs search={search} />
            ) : isclicked ? (
              <PlayTrack
                albumdata={albumdata}
                isclicked={isclicked}
                setTrackuri={setTrackuri}
                trackuri={trackuri}
              />
            ) : (
              <TopArtist
                artistid={artistid}
                setAlbumData={setAlbumData}
                isclicked={isclicked}
                setIsClicked={setIsClicked}
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
          uris={[trackuri] ? [trackuri] : []}
          play={play}
          callback={(state) => {
            if (!state.isPlaying) setPlay(false);
            if (state.isPlaying) setPlay(true);
          }}
        />
      </div>
    </div>
  );
}
