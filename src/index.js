import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Context from './context/context';
ReactDOM.render(
    <Context>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Context>,
    document.getElementById('root')
);
