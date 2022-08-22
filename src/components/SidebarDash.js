import "../styles/sidebar.css";
import { MdHomeFilled, MdAlbum, MdAddBox } from "react-icons/md";
import { RiPlayListFill } from "react-icons/ri";
import { IoMdHeart } from "react-icons/io";
import { BsPersonFill } from "react-icons/bs";
<bs></bs>;

export default function SidebarDash() {
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
          <a href="">
            <span className="material-icons-sharp">
              <MdHomeFilled />
            </span>
            <h3>Home</h3>
          </a>
          <a href="">
            <span className="material-icons-sharp">
              <BsPersonFill />
            </span>
            <h3>Artists</h3>
          </a>
          <a href="">
            <span className="material-icons-sharp">
              <MdAlbum />
            </span>
            <h3>Albums</h3>
          </a>
          <a href="">
            <span className="material-icons-sharp">
              <RiPlayListFill />
            </span>
            <h3>Playlist</h3>
          </a>
          <a href="">
            <span className="material-icons-sharp">
              <MdAddBox />
            </span>
            <h3>Créer playlist</h3>
          </a>
        </div>
      </aside>
    </div>
  );
}
