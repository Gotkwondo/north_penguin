import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import "styles/css/font.css";
import "styles/css/preset.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  // 여기서부터 proccess.env가 webpack에서 읽혀지지 않는다.
  // basename 속성을 없애주니 월활히 렌더링 된다.
  <Router>
    <App />
  </Router>
  
);