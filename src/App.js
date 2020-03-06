import React from 'react';
import Header from "./components/Header"
import Footer from "./components/Footer"
import './App.css';
import Main from "./components/Main"
import CommentBlock from "./components/CommentBlock"
import Comment from "./components/Comment"
import CommentBox from "./components/commentB/CommentBox"
/* const http = require("./server.js") */
let commentbase=require("./data/data.json");
var baseOfComment=React.createContext("yellow");

function App() {
  return (
    
    <body>
      <div className="container">
        <Header />
        <main>
        <Main />
        
        <CommentBlock />
        <CommentBox url="http://f92768t2.beget.tech/data.json" pollInterval={2000} />
        </main>
        <Footer />
      </div>  
    </body>
    
  );
}

export default App;
