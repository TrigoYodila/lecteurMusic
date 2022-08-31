import { DashContext } from './DashboardUseContext';
import '../styles/recents.css';
import { useContext } from 'react';

export default function SearchSongs({search}){

  
   const { trackuri, setTrackuri } = useContext(DashContext)


    return (
      <div>
        <div className="recents-card">
          {search.map((item) => {
            return (
              <div className="recent-item">
                <img src={item.album.images[0].url} />
                <div className="track-name-title">
                  <div className="title-track">{item.name}</div>
                  <div className="name-track">{item.artists[0].name}</div>
                </div>
                <div className="play" onClick={() => setTrackuri(item.uri)}>
                  <div className="arrow-right"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
}