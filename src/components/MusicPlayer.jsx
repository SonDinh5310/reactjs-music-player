import React, { useContext } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { AppContext } from "../context/context";

function MusicPlayer({ props }) {
    const { currentSong } = useContext(AppContext);
    const { currentSongIndex, data, handleChangeIndex } = props;
    const handleOnEnded = () => {
        if (currentSongIndex < data.length) {
            handleChangeIndex(currentSongIndex + 1);
            return;
        }
        handleChangeIndex(0);
    };
    return (
        <AudioPlayer
            className="fixed bottom-0"
            showSkipControls
            showFilledVolume
            src={data[currentSongIndex].url}
            onEnded={handleOnEnded}
        />
    );
}

export default MusicPlayer;
