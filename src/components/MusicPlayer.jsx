import React, { useState, useEffect } from "react";
import { music } from "../constants";

const MusicPlayer = () => {
  const [songs, setSongs] = useState(music); // Using hardcoded music data
  const [currentSong, setCurrentSong] = useState(music[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  const playPauseHandler = () => {
    setIsPlaying(!isPlaying);
  };

  const nextSongHandler = () => {
    const currentIndex = songs.findIndex(song => song.id === currentSong.id);
    setCurrentSong(songs[(currentIndex + 1) % songs.length]);
  };

  const prevSongHandler = () => {
    const currentIndex = songs.findIndex(song => song.id === currentSong.id);
    setCurrentSong(songs[(currentIndex - 1 + songs.length) % songs.length]);
  };

  return (
    <div className="player">
      {currentSong && (
        <>
        <h2 className='foru'>{currentSong.name}</h2>
          <h3 >{currentSong.artist}</h3>
          <img className="songPic"
            src={`https://cms.samespace.com/assets/${currentSong.cover}`}
            alt={currentSong.name}
          />
          <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
          <div class="progress-bar" ></div>
          </div>
          {/* <audio src={currentSong.url} controls autoPlay={isPlaying}></audio> */}
          <div className="buttons">
          <i class="fa-solid fa-ellipsis"></i>
          <i onClick={prevSongHandler} class="fa-solid fa-backward"></i>
          <i onClick={playPauseHandler} class="fa-solid fa-play"></i>
          <i onClick={nextSongHandler} class="fa-solid fa-forward"></i>
          <i class="fa-solid fa-volume-low"></i>
          </div>
          {/* <div className="controls">
            <button onClick={prevSongHandler}>Previous</button>
            <button onClick={playPauseHandler}>
              {isPlaying ? "Pause" : "Play"}
            </button>
            <button onClick={nextSongHandler}>Next</button>
          </div> */}
        </>
      )}
    </div>
  );
};

export default MusicPlayer;
