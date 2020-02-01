import React from 'react';
import Header from "./components/Header"
import './App.css';
import Main from "./components/Main"
import CommentBlock from "./components/CommentBlock"
import Comment from "./components/Comment"

function App() {
  return (
    <body>
      <div className="container">
        <Header />
        <main>
        <Main />
        <CommentBlock />
            
        </main>
      </div>  
    </body>
  );
}

export default App;
