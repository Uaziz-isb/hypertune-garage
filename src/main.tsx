import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { initGA, trackPerformanceMetrics } from './utils/analytics';

// Initialize Google Tag and Web Vitals / performance monitor
initGA();
trackPerformanceMetrics();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
