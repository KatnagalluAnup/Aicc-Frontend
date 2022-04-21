import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthSignIn from './components/SignIn/AuthSign-In';
import SignIn from './components/SignIn/UserSign-In';
import { initStore } from './redux';

const store = initStore();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/auth" element={<AuthSignIn />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
