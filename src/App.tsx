// import Home from 'pages/main/Home';
import Header from 'components/modules/Header/Header';
import React from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<Header />}></Route>
        {/* <Route path='/pla' */}
      </Routes>
      
    </>
  );
}

export default App;