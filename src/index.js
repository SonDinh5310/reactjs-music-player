import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

const container = document.getElementById('root');
const rootElement = createRoot(container); // createRoot(container!) if you use TypeScript
rootElement.render(<App />);
