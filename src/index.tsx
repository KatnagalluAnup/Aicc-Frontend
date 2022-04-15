import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SampleComponent from './components/SampleComponent';
import Page2Component from './components/Page2Component';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SampleComponent />} />
        <Route path="/page2" element={<Page2Component />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
