import { useContext, useState } from "react";
import { globalData } from "./userContext";
import "../styles/login.css";

export default function Login({clicked}) {
  const {
    userAuth,
    scope,
    redirect_uri,
    client_id,
    auth_endpoint,response_type,
  } = useContext(globalData);
  

  return (
    <nav className={clicked ? "nav" : "nav open"}>
      <ul className={clicked ? "menu-nav" : "menu-nav open"}>
        <li
          className={
            clicked ? "menu-nav__item active" : "menu-nav__item active open"
          }
        >
          <a
            href={`${auth_endpoint}?client_id=${client_id}&scope=${scope.join(
              "%20"
            )}&redirect_uri=${redirect_uri}&response_type=${response_type}&show_dialog=true`}
            className={clicked ? "menu-nav__link" : "menu-nav__link open"}
          >
            Se connectez au spotify
          </a>
        </li>
      </ul>
    </nav>
  );
}
