import React from 'react';
import Header from "./components/Header"
import './App.css';
import Main from "./components/Main"

function App() {
  return (
    <body>
      <div className="container">
        <Header />
        <Main />
      </div>  
    </body>
  );
}

export default App;
