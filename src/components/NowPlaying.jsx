import React from 'react';

function NowPlaying({ data, currentSongIndex }) {
    return (
        <div className="mx-auto my-auto">
            <img
                src={
                    currentSongIndex !== null
                        ? data[currentSongIndex].images
                        : 'https://radio.tzatzikiweeb.moe/api/fetchArt?id=undefined'
                }
                alt=""
                className="w-[300px] h-[300px] rounded-full mx-auto drop-shadow-xl border-2 border-black object-cover"
            />
            <p className="font-semibold mt-3 text-center text-lg text-white">
                {currentSongIndex !== null ? data[currentSongIndex].name : ''}
            </p>
            <p className="italic mt-2 text-center text-slate-200">
                {currentSongIndex !== null ? data[currentSongIndex].author : ''}
            </p>
        </div>
    );
}

export default NowPlaying;
