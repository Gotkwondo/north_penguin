// import Home from 'pages/main/Home';
import HomePage from 'pages/HomePage';
import NotFound from 'pages/NotFound';
import React from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<HomePage />}></Route>
        {/* <Route path='/pla' */}
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
      
    </>
  );
}

export default App;