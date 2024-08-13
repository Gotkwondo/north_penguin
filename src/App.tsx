// import Home from 'pages/main/Home';
import Header from 'components/modules/Header/Header';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<Header />}></Route>
      </Routes>
    </>
  );
}

export default App;