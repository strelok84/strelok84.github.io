import React, { Component } from "react";
import Commentfb from "./Commentfb";

class CommentList extends React.Component{
    render(){
        var commentNodes=this.props.data.map(function(comment){
            return(
            <Commentfb author={comment.author} key={comment.id}>{comment.text}</Commentfb>
            )
        })
        return(
            <div className="commentList">
                {commentNodes}
            </div>
        )
    }
}

export default CommentList