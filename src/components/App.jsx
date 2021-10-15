import React, { Component } from 'react';
import axios from 'axios';
import VideoPlayer from './VideoPlayer/VideoPlayer';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            video: []
        };
    }

    // componentDidMount () {
    //     this.getVideo();
    // }

    // async getVideo () {
    //     try {
    //         let response = await axios.get('https://www.googleapis.com/youtube/v3/videos?id=eVTXPUF4Oz4&key=AIzaSyD_TOCmtpNdfCJuibaTjVk0KYOGC5tMLfE');
    //         console.log(response.data);
    //         this.setState ({
    //             video: response.data
    //         })
    //     }
    //     catch (ex) {
    //         alert('Error in API Call');
    //     }
    // }
    
    render() { 
        return (
            <div>
                {console.log(this.state.video)}
                <h1> What's up? You wanna buy some YouTube?!</h1>
                <VideoPlayer />
            </div>
        );
    }
}
 
export default App;