import React from 'react';
import { Route, Routes } from 'react-router-dom';
import App from './views/App';
import ModalTest from './views/ModalTest';

function Router() {
  return (
    <Routes>
      <Route path="" element={<App />} />
      <Route path="modaltest" element={<ModalTest />} />
    </Routes>
  );
}

export default Router;
