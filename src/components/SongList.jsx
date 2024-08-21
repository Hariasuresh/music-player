import React from 'react';
import { MdHeight } from 'react-icons/md';
import { FaSearch } from "react-icons/fa";

const SongList = ({ songs, currentSong, setCurrentSong }) => {
  return (
    <div className="song-list d-inline p-10 ">
     
      <div className="header" >
        <h2 className='foru'>For You </h2> 
        <h2 className='topt'>Top Tracks</h2>
        </div>
        <div className='forunserch'>
      <input
        type="text"
        placeholder="Search Song, Artist"
        className="search-bar"
      />
      <div className='search-icon'>
      <FaSearch className='custom-icon'/>
      </div>
    
      </div>
      <div >
      <ul>
        {songs.map((song) => (
            
          <li 
            key={song.id}
            className={`song-item ${song.id === currentSong.id ? 'active' : ''}`}
            onClick={() => setCurrentSong(song)}
          >
            <img
              src={`https://cms.samespace.com/assets/${song.cover}`}
              alt={song.name}
              className="song-cover"
            />
            <div className="song-info">
              <h3 >{song.name}</h3>
              <p>{song.artist}</p>
            </div>
            <div className="song-duration">
              <p>{formatDuration(song.url)}</p>
            </div>
          </li>
          
        ))}
      </ul>
      </div>
    </div>
  );
};

// Function to format the duration
const formatDuration = (url) => {
  // Replace this with actual audio duration calculation if needed
  return "3:45";
};

export default SongList;
