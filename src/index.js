import { createRoot } from 'react-dom/client';
import * as React from "react";
import AboutPage from './components/AboutPage';
import './index.css';

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(<AboutPage />);
