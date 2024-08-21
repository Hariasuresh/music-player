import React, { useState } from "react";
import MusicPlayer from "./components/MusicPlayer";
import SongList from "./components/SongList";
import Start from "./components/Start";
import { music } from "./constants";
import "./App.css";

function App() {
  const [songs] = useState(music);
  const [currentSong, setCurrentSong] = useState(songs[0]);

  return (
    <div className="app">
      <Start />
      <SongList
        songs={songs}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
      />
      <MusicPlayer currentSong={currentSong} />
    </div>
  );
}

export default App;
