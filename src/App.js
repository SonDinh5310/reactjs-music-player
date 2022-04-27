import React, { useState } from 'react';
import useFetch from './hooks/useFetch/useFetch';

import NavBar from './components/NavBar';
import MusicList from './components/MusicList';
import MusicPlayer from './components/MusicPlayer';
import NowPlaying from './components/NowPlaying';
import Loading from './components/Loading';

function App() {
    const { data, isLoading } = useFetch('http://localhost:8888/songs');
    const [currentSongIndex, setCurrentSongIndex] = useState(null);
    const handleChangeIndex = (index) => {
        setCurrentSongIndex(index);
    };

    return (
        <div className="flex flex-col h-screen justify-between bg-slate-500">
            <NavBar></NavBar>
            {isLoading && <Loading className="w-full" />}
            {data && !isLoading && (
                <>
                    <div className="flex flex-row justify-between h-full">
                        <NowPlaying
                            data={data}
                            currentSongIndex={currentSongIndex}
                        />
                        <MusicList
                            songs={data}
                            handleChangeIndex={handleChangeIndex}
                        />
                    </div>
                    <MusicPlayer
                        props={{ data, currentSongIndex, handleChangeIndex }}
                    />
                </>
            )}
        </div>
    );
}

export default App;
