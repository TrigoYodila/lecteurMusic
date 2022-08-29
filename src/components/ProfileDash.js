import ProfileTop from "./ProfileTop";
import "../styles/profiledash.css";
import Artist from "./Artist";

export default function ProfileDash() {
  return (
    <div className="right">
      <ProfileTop />
      <Artist />
    </div>
  );
}
