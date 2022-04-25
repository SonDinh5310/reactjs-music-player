import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

function MusicPlayer({ song }) {
    return (
        <AudioPlayer
            className="fixed bottom-0"
            showSkipControls
            showFilledVolume
        />
    );
}

export default MusicPlayer;
