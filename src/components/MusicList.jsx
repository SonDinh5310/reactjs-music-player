import React, { useContext } from 'react';
import { AppContext } from '../context/context';

function MusicList({ songs }) {
    const { setCurrentSong } = useContext(AppContext);

    return (
        <table className="table-auto w-1/3 mx-auto">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Song</th>
                    <th>Author</th>
                </tr>
            </thead>
            <tbody>
                {songs.map((song, index) => {
                    const { id, name, author, url } = song;
                    return (
                        <tr
                            key={id}
                            className="cursor-pointer"
                            onClick={() => setCurrentSong(url)}
                        >
                            <td className="text-center">{index}</td>
                            <td className="text-center">{name}</td>
                            <td className="text-center">{author}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

export default MusicList;
