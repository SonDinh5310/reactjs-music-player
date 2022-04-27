import React from 'react';
import MusicItem from './MusicItem';

function MusicList({ songs, handleChangeIndex }) {
    return (
        <table className="table-auto overflow-scroll">
            <thead className="bg-slate-700 border-b-2">
                <tr>
                    <th className="text-white py-3">#</th>
                    <th className="text-left text-white py-3">Song</th>
                    <th className="text-white py-3">Author</th>
                </tr>
            </thead>
            <tbody>
                {songs.map((song, index) => {
                    const { id, name, author } = song;
                    return (
                        <MusicItem
                            key={id}
                            props={{
                                name,
                                author,
                                index,
                                handleChangeIndex,
                            }}
                        />
                    );
                })}
            </tbody>
        </table>
    );
}

export default MusicList;
