import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

// Bust stale GitHub Pages / browser caches when we deploy updates
const APP_VERSION = '2026-06-14-v2';
const versionKey = 'ie_app_version';
const prev = localStorage.getItem(versionKey);
if (prev && prev !== APP_VERSION) {
  localStorage.setItem(versionKey, APP_VERSION);
  location.replace(`${location.pathname}${location.search ? `${location.search}&` : '?'}v=${APP_VERSION}`);
} else {
  localStorage.setItem(versionKey, APP_VERSION);
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
