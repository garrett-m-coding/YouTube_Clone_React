import React, { Component } from 'react';


class AddComment extends Component {
    constructor(props) {
      super(props);
      this.state = {
        body: "",
        videoId: this.props.videoSrc,
        likes: 0,
        dislikes: 0,
      };
    }
  
    handleChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value,
      });
    };
  
    handleSubmit = (event) => {
      event.preventDefault();
      let createdComment = {
        body: this.state.body,
        videoId: this.state.videoId,
        likes: 0,
        dislikes: 0,
      }
      this.props.addComment(createdComment);
    };
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>Comment</label>
          <input
            type="text"
            name="body"
            required="required"
            placeholder="Enter a polite uplifting positive comment..."
            onChange={this.handleChange}
            value={this.state.body}
          />
          <input
            type="text"
            name="videoId"
            required="required"
            placeholder="Enter videoId from URL 'v=...'"
            onChange={this.handleChange}
            value={this.props.videoSrc}
          />
          <button type="submit">Add Comment</button>
        </form>
      );
    }
  }
  
  export default AddComment;