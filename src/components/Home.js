import { useState } from "react";
import Main from "./Main";

export default function Home() {
  
  
    let [showMenu, setShowMenu] = useState(true);

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <div className="home-container">
      <Main />
    </div>
  );
}
