import React from 'react';
import Header from "./components/Header"
import './App.css';
import Main from "./components/Main"
import CommentBlock from "./components/CommentBlock"
import Comment from "./components/Comment"
import CommentBox from "./components/commentB/CommentBox"
var baseOfComment=React.createContext("yellow");
var data=[
  {id:1, author:"Pete Hunt", text:"This is one comment"},
  {id:2, author:"Jordan Walke", text:"This is another comment"}
];
function App() {
  return (
    
    <body>
      <div className="container">
        <Header />
        <main>
        <Main />
        
        <CommentBlock />
        <CommentBox url="/home/streloc84/Рабочий стол/reactsite/whoiam/src/components/data.json" pollInterval={2000} />
        </main>
      </div>  
    </body>
    
  );
}

export default App;
