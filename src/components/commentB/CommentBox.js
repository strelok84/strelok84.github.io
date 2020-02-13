import React,{ Component } from "react";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";
import $ from 'jquery';



class CommentBox extends React.Component{
    constructor(){
        super()
        this.state = {
            data:[]
        }
      }
    
    loadCommentsFromserver=()=>{
        $.ajax({
            url:this.props.url,
            dataType:"json",
            cache:false,
            success:function(data){
                this.setState({data:data});
                console.log(data);
            }.bind(this),
            error:function(xhr,status,err){
                console.error(this.props.url,status,err.toString());
            }.bind(this)
        });
    }  

    /* getInitialState(){
        return {data:[]}
    } */
    handleCommentsubmit=(comment)=>{
        $.ajax({
            url:this.props.url,
            dataType:"json",
            type:"POST",
            data:comment,
            success:function(data){
                this.setState({data:data});
            }.bind(this),
            error:function(xhr,status,err){
                console.error(this.props.url,status, err.toString());
            }.bind(this)
        })
    }
    componentDidMount (){
        this.loadCommentsFromserver();
        setInterval(this.loadCommentsFromserver,this.props.pollInterval);
    }

    render(){
        /* var data=[
            {id:1, author:"Pete Hunt", text:"This is one comment"},
            {id:2, author:"Jordan Walke", text:"This is another comment"}
          ]; */
        return(
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList data={this.state.data}/>
                <CommentForm onCommentSubmit={this.handleCommentsubmit}/>
            </div>
        )
    }
}

export default CommentBox;