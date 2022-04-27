import React from 'react';

function MusicItem({ props }) {
    const { name, author, index, handleChangeIndex } = props;
    return (
        <tr
            className="cursor-pointer bg-slate-700"
            onClick={() => handleChangeIndex(index)}
        >
            <td className="text-center px-3 text-slate-300">{index}</td>
            <td className="text-left text-slate-300">{name}</td>
            <td className="text-center px-3 text-slate-300">{author}</td>
        </tr>
    );
}

export default MusicItem;
