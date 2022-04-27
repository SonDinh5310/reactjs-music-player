import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

function MusicPlayer({ props }) {
    const { currentSongIndex, data, handleChangeIndex } = props;
    const handleOnEnded = () => {
        if (currentSongIndex < data.length - 1) {
            handleChangeIndex(currentSongIndex + 1);
            return;
        }
        handleChangeIndex(0);
    };
    const handleClickNext = () => {
        if (currentSongIndex < data.length - 1) {
            handleChangeIndex(currentSongIndex + 1);
            return;
        }
        handleChangeIndex(0);
    };
    const handleClickPrev = () => {
        if (currentSongIndex > 1) {
            handleChangeIndex(currentSongIndex - 1);
            return;
        }
    };
    return (
        <AudioPlayer
            showSkipControls
            showFilledVolume
            src={data[currentSongIndex]?.url}
            onEnded={handleOnEnded}
            onClickNext={handleClickNext}
            onClickPrevious={handleClickPrev}
        />
    );
}

export default MusicPlayer;
