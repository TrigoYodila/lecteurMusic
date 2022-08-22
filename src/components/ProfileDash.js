import ProfileTop from "./ProfileTop";
import { useContext } from "react";
import "../styles/profiledash.css";
import Artist from "./Artist";
import Playlist from "./Playlist";


export default function ProfileDash() {
  
  return (
    <div className="right">
      <ProfileTop />
      <Artist />
      <Playlist />
    </div>
  );
}
