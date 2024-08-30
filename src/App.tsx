// import Home from 'pages/main/Home';
import HomePage from 'pages/HomePage';
import NotFound from 'pages/NotFound';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        {/* 올바르게 매칭된 주소 */}
        <Route path="" element={<HomePage />}></Route>
        {/* 매칭된 주소 이외의 주소에 매칭 */}
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
    </>
  );
}

export default App;