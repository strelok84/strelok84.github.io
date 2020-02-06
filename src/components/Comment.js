import React, { Component } from 'react'
import {ThemeContext} from "../data/Data"
import { format } from 'date-fns'


class Comment extends Component {
  constructor(){
    super()
    this.state = {
      comments: [],
      form: {
        name: '',
        comment: ''
      }
    }
  }
  
  
  componentDidMount() {
    if (localStorage.getItem('state')) {
      this.setState({ ...JSON.parse(localStorage.getItem('state'+this.props.num)) })
    }

    var numcom="state"+this.props.num;
    this.context[numcom]=this.state.form;
    console.log(this.context[numcom])
  }
 
  addComment = () => {
    var numcom="state"+this.props.num;
    this.setState({
      comments: [
        ...this.state.comments,
        {
          id: this.state.comments.length ? this.state.comments.reduce((p, c) => p.id > c.id ? p : c).id + 1 : 1, // max id +1
          name: this.state.form.name,
          comment: this.state.form.comment,
          date: new Date()
        }
      ],
      form: {
        name: '',
        comment: ''
      }
    }, 
    () => localStorage.setItem('state'+this.props.num, JSON.stringify(this.state)))
    
  }
 
  removeComment = (id) => {
    this.setState({
      comments: this.state.comments.filter(comment => comment.id !== id)
    }, () => localStorage.setItem('state'+this.props.num, JSON.stringify(this.state)))
  }
 
  handleChange = (e) => {
    
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      }
    })
  }
  
  render() {
    return (
      <div className="Comment">
        {this.state.comments.map(comment => <div key={comment.id}>
          <span style={{ fontStyle: 'italic' }}>{comment.id} - {/* format(comment.date, 'dd/mm/yyyy') */} </span>
          <strong>{comment.name}: </strong>
          <span>{comment.comment}</span>
          <button onClick={this.removeComment.bind(null, comment.id)}>Удалить</button>
        </div>)}
        <div>
          <ul className="wrapper">
            <li className="form-row">
            <label className="nameComment">Имя: <input
              type="text"
              value={this.state.form.name}
              name="name"
              onChange={this.handleChange}
              /></label>
            </li>
            <li className="form-row">
            <label className="textComment">Комментарий: <textarea
              name="comment"
              value={this.state.form.comment}
              onChange={this.handleChange}
              ></textarea>
            </label>
            </li>
            <button onClick={this.addComment}>Добавить комментарий</button>

          </ul>
        </div>
      </div>
    )
  }
}
Comment.contextType = ThemeContext;
export default Comment;
