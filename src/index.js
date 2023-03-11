import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CursorVariantProvider from './assert/hooks/variantMousePosition';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CursorVariantProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </CursorVariantProvider>
  
);
