import { createContext, useEffect, useState } from "react";
import AppRouter from "./components/AppRouter";
import { globalData } from "./components/userContext";
import SpotifyWebApi from "spotify-web-api-js";
import "./style.css";

const spotify = new SpotifyWebApi();

//ac861758db1f4152aeee2f814db1a478 (local client) http://localhost:3000/dashboard
//232d842a255c4fd3b756903ee946495d (inline client) https://bmusic.vercel.app/
function App() {
  const userAuth = {
    CLIENT_ID: "232d842a255c4fd3b756903ee946495d",
    REDIRECT_URI: "https://bmusic.vercel.app/dashboard",
    AUTH_ENDPOINT: "https://accounts.spotify.com/authorize",
    RESPONSE_TYPE: "token",
  };

  const scope = [
    "user-read-email",
    "user-read-private",
    "user-modify-playback-state",
    "user-read-playback-state",
    "user-read-currently-playing",
    "streaming",
    "user-read-recently-played",
    "user-read-playback-position",
    "user-top-read",
    "playlist-read-collaborative",
    "playlist-modify-public",
    "playlist-read-private",
    "playlist-modify-private",
  ];

  const [token, setToken] = useState("");

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];

      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }

    setToken(token);
  }, [token]);

  return (
    <globalData.Provider value={{ userAuth, scope, token, setToken }}>
      <AppRouter />
    </globalData.Provider>
  );
}

export default App;
