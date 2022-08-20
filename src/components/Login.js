import { useContext, useState } from "react";
import { globalData } from "./userContext";
import "../styles/login.css";

export default function Login({clicked}) {
  const { userAuth, scope } = useContext(globalData);
  

  return (
    <nav className={clicked ? "nav" : "nav open"}>
      <ul className={clicked ? "menu-nav" : "menu-nav open"}>
        <li
          className={
            clicked ? "menu-nav__item active" : "menu-nav__item active open"
          }
        >
          <a
            href={`${userAuth.AUTH_ENDPOINT}?client_id=${
              userAuth.CLIENT_ID
            }&scope=${scope.join("%20")}&redirect_uri=${
              userAuth.REDIRECT_URI
            }&response_type=${userAuth.RESPONSE_TYPE}&show_dialog=true`}
            className={clicked ? "menu-nav__link" : "menu-nav__link open"}
          >
            Se connectez au spotify
          </a>
        </li>
      </ul>
    </nav>
  );
}
