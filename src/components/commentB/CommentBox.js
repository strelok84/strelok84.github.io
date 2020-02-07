import React,{ Component } from "react";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";




class CommentBox extends React.Component{
    
    render(){
        var data=[
            {id:1, author:"Pete Hunt", text:"This is one comment"},
            {id:2, author:"Jordan Walke", text:"This is another comment"}
          ];
        return(
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList data={this.props.data}/>
                <CommentForm />
            </div>
        )
    }
}

export default CommentBox;