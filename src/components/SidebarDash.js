import "../styles/sidebar.css";
import { MdHomeFilled, MdAlbum, MdAddBox } from "react-icons/md";
import { RiPlayListFill } from "react-icons/ri";
import { IoMdHeart } from "react-icons/io";
import { BsPersonFill } from "react-icons/bs";
import {RiLogoutCircleRFill} from 'react-icons/ri'
import { Link, useNavigate } from "react-router-dom";
import { globalData } from "./userContext";
import { useContext } from "react";
import { NavLink } from "react-router-dom";

export default function SidebarDash() {
  let navigate = useNavigate();
  const { token, setToken} = useContext(globalData);

  const handleChange = (e) => {
    navigate("pageartiste", { replace: true })
  };

  function logout(){
    setToken("")
    window.localStorage.removeItem("token")
    console.log("bonjour")
  }


  return (
   
    <aside className="sidebar">
      <div className="top">
        <div className="logo">
          <img src="./images/Head phone.png" />
        </div>
        <div>
          <h2 className="logo-text">
            &beta;<span className="danger">Music</span>
          </h2>
        </div>
      </div>

      <div className="sidebar">
        <NavLink to="/dashboard" activeClassName="active">
          <span>
            <MdHomeFilled />
          </span>
          <h3>Home</h3>
        </NavLink>
        <NavLink to="/playlists" activeClassName="active">
          <span>
            <RiPlayListFill />
          </span>
          <h3>Playlist</h3>
        </NavLink>
        <a href="">
          <span>
            <MdAddBox />
          </span>
          <h3>Créer playlist</h3>
        </a>
        <Link to="/" onClick={logout}>
          <span>
            <RiLogoutCircleRFill />
          </span>
          <h3 className="connect">Se deconnecter</h3>
        </Link>
      </div>
    </aside>
  );
}
