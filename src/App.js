import React, { useRef } from "react";
import NavBar from "./components/NavBar";
import useFetch from "./hooks/useFetch/useFetch";

import MusicList from "./components/MusicList";
import MusicPlayer from "./components/MusicPlayer";
import Loading from "./components/Loading";

function App() {
    const { data, isLoading } = useFetch("http://localhost:8888/songs");
    console.log(data);
    return (
        <>
            <NavBar></NavBar>
            {isLoading && <Loading />}
            {data && !isLoading && (
                <>
                    <MusicList songs={data} className="w-full" />
                    <MusicPlayer />
                </>
            )}
        </>
    );
}

export default App;
