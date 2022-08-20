import Login from "./Login";
import "../styles/main.css";
import { useState } from "react";

export default function Main() {
  const [clicked, setClicked] = useState(true);

  function toggleMenu() {
    setClicked(!clicked);
  }

  return (
    <div className="main-container">
      <header>
        <div className="menu-btn" onClick={toggleMenu}>
          <span
            className={clicked ? "menu-btn__burger" : "menu-btn__burger open"}
          ></span>
        </div>
        <Login clicked={clicked} />
      </header>
      <main className="home">
        <h2>Bienvenu(e) sur</h2>
        <h1 className="home__name">
          &beta;<span className="home__name--list">Music</span>
        </h1>
        <h2>Ecoutez librement la musique que vous aimez...</h2>
      </main>
      <footer>&copy; Copyright 2022 | &beta;Music </footer>
    </div>
  );
}
