import React, { Component } from 'react';

class AddComment extends Component {
    constructor(props) {
      super(props);
      this.state = {
        body: "",
        // videoId: "",
        // likes: 0,
        // dislikes: 0,
      };
    }
  
    handleChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value,
      });
    };
  
    handleSubmit = (event) => {
      event.preventDefault();
      this.props.addComment(this.state);
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
            value={this.state.title}
          />
          <button type="submit">Add Comment</button>
        </form>
      );
    }
  }
  
  export default AddComment;