import Test from 'components/Test';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<Test text='111' />}></Route>
        <Route path="/test" element={<Test text='222222' />}></Route>
      </Routes>
      
    </>
    
  );
}

export default App;