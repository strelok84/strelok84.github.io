import React, { Component } from 'react'

import { format } from 'date-fns'


class Comment extends Component {
 
  state = {
    comments: [],
    form: {
      name: '',
      comment: ''
    }
  }
 
  componentDidMount() {
    if (localStorage.getItem('state')) {
      this.setState({ ...JSON.parse(localStorage.getItem('state'+this.props.num)) })
    }
  }
 
  addComment = () => {
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
    }, () => localStorage.setItem('state'+this.props.num, JSON.stringify(this.state)))
  }
 
  removeComment = (id) => {
    this.setState({
      comments: this.state.comments.filter(comment => comment.id !== id)
    }, () => localStorage.setItem('state'+this.props.num, JSON.stringify(this.state)))
  }
 
  handleChange = (e) => {
    console.log(e.target.name)
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
 
export default Comment
