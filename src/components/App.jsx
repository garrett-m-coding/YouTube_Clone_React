import React, { Component } from 'react';
import axios from 'axios';
import Youtube from './Youtube/Youtube';
import SearchBar from './SearchBar/SearchBar';
import VideoList from './VideoList/VideoList';
import VideoInfo from './VideoInfo/VideoInfo';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            video: [],
            comments: [{body:""}],
            searchedVideos: [],
            selectedVideo: null
        };
    }

    componentDidMount () {
        this.getAllComments();
    }

    async getVideo () {
        try {
            let response = await axios.get('https://www.googleapis.com/youtube/v3/videos?id=eVTXPUF4Oz4&key=AIzaSyD_TOCmtpNdfCJuibaTjVk0KYOGC5tMLfE');
            console.log(response.data);
            this.setState ({
                video: response.data
            })
        }
        catch (ex) {
            alert('Error in API Call');
        }
    }

    getAllComments = async () => {
        try {
            let responseAllComments = await axios.get("http://127.0.0.1:8000/comments/");
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
                "http://127.0.0.1:8000/comments/", newComment
            );
            console.log(responseCreateComment.data);
            this.getAllComments();
        } catch (ex) {
            console.log("Error in API call:", ex);
        }
    };

    handleSubmit = async (termFromSearchBar) => {
        const response = await Youtube.get('/search', {
            params: {
                q: termFromSearchBar
            }
        })
        this.setState({
            searchedVideos: response.data.items
        })
    };

    handleVideoSelect = (video) => {
        this.setState({selectedVideo: video})
    }

    render() { 
        return (
            <div>
                <SearchBar handleFormSubmit = {this.handleSubmit} />
                <h1>{console.log(this.state.searchedVideos)}</h1>
                {console.log(this.state.video)}
                <h1> What's up? You wanna buy some YouTube?!</h1>
                <VideoList handleVideoSelect = {this.handleVideoSelect} videos = {this.state.searchedVideos} />
                <VideoInfo video = {this.state.selectedVideo} addComment={this.addComment} getAllComments={this.getAllComments}/>
            </div>
        );
    }
}
 
export default App;