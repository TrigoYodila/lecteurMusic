import "../styles/sidebar.css";
import { MdHomeFilled, MdAlbum, MdAddBox } from "react-icons/md";
import { RiPlayListFill } from "react-icons/ri";
import { IoMdHeart } from "react-icons/io";
import { BsPersonFill } from "react-icons/bs";
import {RiLogoutCircleRFill} from 'react-icons/ri'
import { Link, useNavigate } from "react-router-dom";

export default function SidebarDash() {
  let navigate = useNavigate();

  const handleChange = (e) => {
    navigate("pageartiste", { replace: true })
  };

  return (
    <div className="slide-group">
      <aside>
        <div className="top">
          <div className="logo">
            <img src="./images/Head phone.png" />
            <h2 className="logo-text">
              &beta;<span className="danger">Music</span>
            </h2>
          </div>
        </div>

        <div className="sidebar">
          <Link to="/dashboard">
            <span className="material-icons-sharp">
              <MdHomeFilled />
            </span>
            <h3>Home</h3>
          </Link>
          <Link to="/playlists">
            <span className="material-icons-sharp">
              <RiPlayListFill />
            </span>
            <h3>Playlist</h3>
          </Link>
          <a href="">
            <span className="material-icons-sharp">
              <MdAddBox />
            </span>
            <h3>Créer playlist</h3>
          </a>
          <a href="">
            <span className="material-icons-sharp">
              <RiLogoutCircleRFill />
            </span>
            <h3 className="connect">Se deconnecter</h3>
          </a>
        </div>
      </aside>
    </div>
  );
}
