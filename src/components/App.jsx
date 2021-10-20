import React, { Component } from "react";
import axios from "axios";
import Youtube from "./Youtube/Youtube";
import SearchBar from "./SearchBar/SearchBar";
import VideoList from "./VideoList/VideoList";
import VideoInfo from "./VideoInfo/VideoInfo";
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      video: [],
      comments: [{ body: "" }],
      searchedVideos: [],
      selectedVideo: null,
    };
  }

  componentDidMount() {
    this.getAllComments();
  }

  async getVideo() {
    try {
      let response = await axios.get(
        "https://www.googleapis.com/youtube/v3/videos?id=eVTXPUF4Oz4&key=AIzaSyC5486ZAlOwzgJqpBJW6y5L5_cjCdRUY7Q"
      );
      console.log(response.data);
      this.setState({
        video: response.data,
      });
    } catch (ex) {
      alert("Error in API Call");
    }
  }

  getAllComments = async () => {
    try {
      let responseAllComments = await axios.get(
      "http://127.0.0.1:8000/comments/eVTXPUF4Oz4"
      );
      console.log(responseAllComments.data);
      this.setState({
        comments: responseAllComments.data,
      });
    } catch (ex) {
      console.log("Error in API call!");
    }
  };

  addComment = async (newComment) => {
    try {
      let responseCreateComment = await axios.post(
        "http://127.0.0.1:8000/comments/",
        newComment
      );
      console.log(responseCreateComment.data);
      this.getAllComments();
    } catch (ex) {
      console.log("Error in API call:", ex);
    }
  };

  handleSubmit = async (termFromSearchBar) => {
    const response = await Youtube.get("/search", {
      params: {
        q: termFromSearchBar,
      },
    });
    this.setState({
      searchedVideos: response.data.items,
    });
  };

  handleVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div>
        <div class="container">
          <div class="row">
            <div class="col-8" align="center">
              <h1>{console.log(this.state.searchedVideos)}</h1>
              {console.log(this.state.video)}
              <h1> WELCOME TO YOUTUBE CLONE!</h1>
              <h2 className="text">This is not as good as YouTube...</h2>
                <h2 className="text">but hey, no ads!</h2>
              <VideoInfo
                video={this.state.selectedVideo}
                comments={this.state.comments}
                addComment={this.addComment}
                getAllComments={this.getAllComments}
              />
            </div>
            <div class="col-4" align="center">
              <SearchBar handleFormSubmit={this.handleSubmit} />
              <VideoList
                handleVideoSelect={this.handleVideoSelect}
                videos={this.state.searchedVideos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;