import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import { globalData } from "./components/userContext";
import SpotifyWebApi from "spotify-web-api-js";
import "./style.css";

const spotify = new SpotifyWebApi();

function App() {
  const navigate = useNavigate();
 
  let redirect_uri = process.env.REACT_APP_REDIRECT_URI_LOCAL;
  let client_id = process.env.REACT_APP_CLIENT_ID_PROD;
  let auth_endpoint = process.env.REACT_APP_AUTH_ENDPOINT;
  let response_type = process.env.REACT_APP_RESPONSE_TYPE;
  
  console.log("trigo", redirect_uri);
  if (process.env.NODE_ENV === "production") {
    redirect_uri = process.env.REACT_APP_REDIRECT_URI_PROD;
  }

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
  const [connected, setConncted] = useState(false);

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

    if (!token) {
      navigate("/");
    }
  }, [token]);

  return (
    <globalData.Provider
      value={{
        scope,
        token,
        setToken,
        redirect_uri,
        client_id,
        auth_endpoint,
        response_type,
      }}
    >
      <AppRouter />
    </globalData.Provider>
  );
}

export default App;
