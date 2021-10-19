import React from 'react';
import VideoList from '../VideoList/VideoList';
import VideoPlayer from '../VideoPlayer/VideoPlayer';

const VideoInfo = (props) => {
    const videoSrc = props.video.id.videoId;
    console.log(typeof(video));
    return ( 
        <div>
            <VideoPlayer videoSrc = {videoSrc} />
            <h5>{props.video.snippet.description}</h5>
        </div>
     );
}
 
export default VideoInfo;