import { useContext, useState, useEffect } from "react";
import { MdPlayArrow } from "react-icons/md";
import "../styles/recents.css";
import { globalData } from "./userContext";
import SpotifyWebApi from "spotify-web-api-js";
import { DashContext } from "./DashboardUseContext";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const style = {
  marginBottom: "1rem",
};

const spotify = new SpotifyWebApi();

export default function Recents() {
  const { token } = useContext(globalData);

  const [recents, setRecents] = useState([]);
  const [clicked, setClicked] = useState(true);
  const [isloading, setIsLoading] = useState(true);

  const { trackuri, setTrackuri, play, setPlay } = useContext(DashContext);

  spotify.setAccessToken(token);

  useEffect(() => {
    clicked
      ? spotify
          .getMyRecentlyPlayedTracks({ limit: 4 })
          .then((data) => {
            console.log(data.items);
            setRecents(data.items);
            setIsLoading(false);
            console.log("Artist albums", data.items[0].track.artists[0].name);
            // console.log("Data", data);
            console.log("Artist albums", data.items[0].track.name);
            console.log("url image ", data.items[0].track.album.images[0].url);
          })
          .catch((err) => {
            console.log(err);
          })
      : spotify
          .getMyRecentlyPlayedTracks()
          .then((data) => {
            console.log(data.items);
            setRecents(data.items);
            setIsLoading(false);
            console.log("Artist albums", data.items[0].track.artists[0].name);
            console.log("Artist albums", data.items[0].track.name);
            console.log("url image ", data.items[0].track.album.images[0].url);
          })
          .catch((err) => {
            console.log(err);
          });
  }, [clicked, token]);

  console.log("externe", recents);

  function handleClicked() {
    setClicked(!clicked);
    setIsLoading(true);
  }

  function playIsClicked(item) {
    setTrackuri(item.track.uri);
    setPlay(true);
    console.log("BONJOUR");
  }

  return (
    <div style={style} className="container-recents">
      <div className="title-card">
        <h1 className="title">Ecoutés Récemment</h1>
        <span className="voir-plus" onClick={handleClicked}>
          {clicked ? "Voir plus" : "Voir moins"}
        </span>
      </div>
      <div className="recents-card">
        {isloading ? (
          <Box sx={{ display: "flex" }}>
            <CircularProgress color="error" />
          </Box>
        ) : (
          recents.map((item) => {
            return (
              <div className="recent-item">
                <img src={item.track.album.images[0].url} />
                <div className="item-info">
                  <div className="track-name-title">
                    <div className="title-track">{item.track.name}</div>
                    <div className="name-track">
                      {item.track.artists[0].name}
                    </div>
                  </div>
                  <div
                    className="play"
                    onClick={() => {
                      setTrackuri(item.track.uri);
                      setPlay(true);
                    }}
                  >
                    <div className="arrow-right"></div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
