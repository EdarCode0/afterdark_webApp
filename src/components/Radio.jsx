import React, { useState, useEffect, useRef } from "react";
import playlist from "../constants/playlist";
import { BsVolumeMuteFill, BsVolumeUpFill } from "react-icons/bs";

const Radio = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  const currentSong = playlist.songs[currentSongIndex];

  useEffect(() => {
    // Autoplay the music and listen for the end of each song
    audioRef.current.play();
    const audioElement = audioRef.current;
    const handleSongEnd = () => {
      let nextSongIndex = (currentSongIndex + 1) % playlist.songs.length;
      setCurrentSongIndex(nextSongIndex);
    };
    audioElement.addEventListener("ended", handleSongEnd);

    return () => {
      audioElement.removeEventListener("ended", handleSongEnd);
    };
  }, [currentSongIndex]);

  const toggleMute = () => {
    setIsMuted(!isMuted);
    audioRef.current.muted = !audioRef.current.muted;
  };

  return (
    <section id="radio">
      <div>
        <div className="player">
          {/* ... other components ... */}

          <div className="center">
            <img className="album" src={currentSong.img} alt="Album Cover" />
          </div>

          <div className="song_details">
            <div style={{ fontSize: "20px" }}>{currentSong.name}</div>
            <div style={{ marginTop: "7px", fontSize: "10px" }}>
              {currentSong.artist}
            </div>
          </div>

          <div className="controls">
            <button className="big_play_pause" onClick={toggleMute}>
              <div className="playpause">
                {isMuted ? <BsVolumeMuteFill /> : <BsVolumeUpFill />}
              </div>
            </button>
          </div>
        </div>
      </div>

      <audio ref={audioRef} src={currentSong.audio} autoPlay muted={isMuted} />
    </section>
  );
};

export default Radio;
