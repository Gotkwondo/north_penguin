import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  // 여기서부터 proccess.env가 webpack에서 읽혀지지 않는다.
  <Router basename={process.env.PUBLIC_URL}>
    <App />
  </Router>
  
);