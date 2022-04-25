import React, { useContext } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { AppContext } from '../context/context';

function MusicPlayer() {
    const { currentSong } = useContext(AppContext);
    return (
        <AudioPlayer
            className="fixed bottom-0"
            showSkipControls
            showFilledVolume
            src={currentSong}
        />
    );
}

export default MusicPlayer;
