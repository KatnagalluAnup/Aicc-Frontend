import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthSignIn from './components/SignIn/AuthSign-In';
import SignIn from './components/SignIn/UserSign-In';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/auth" element={<AuthSignIn />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
