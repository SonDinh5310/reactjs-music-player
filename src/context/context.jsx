import React, { createContext, useState } from 'react';

export const AppContext = createContext();

const Context = ({ children }) => {
    const [currentSong, setCurrentSong] = useState(null);

    return (
        <AppContext.Provider value={{ currentSong, setCurrentSong }}>
            {children}
        </AppContext.Provider>
    );
};

export default Context;
