import React, { useRef, useState } from "react";
import NavBar from "./components/NavBar";
import useFetch from "./hooks/useFetch/useFetch";

import MusicList from "./components/MusicList";
import MusicPlayer from "./components/MusicPlayer";
import Loading from "./components/Loading";

function App() {
    const { data, isLoading } = useFetch("http://localhost:8888/songs");
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const handleChangeIndex = (index) => {
        setCurrentSongIndex(index);
    };
    console.log(data);
    return (
        <>
            <NavBar></NavBar>
            {isLoading && <Loading />}
            {data && !isLoading && (
                <>
                    <MusicList
                        songs={data}
                        handleChangeIndex={handleChangeIndex}
                        className="w-full"
                    />
                    <MusicPlayer
                        props={{ data, currentSongIndex, handleChangeIndex }}
                    />
                </>
            )}
        </>
    );
}

export default App;
