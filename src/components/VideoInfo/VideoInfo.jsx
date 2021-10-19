import React from 'react';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import DisplayComments from '../DisplayComments/DisplayComments';
import AddComment from '../AddComment/AddComment';

const VideoInfo = (props) => {
    if (!props.video) {
        return <div>Please search for a video, then click on your selection.</div>;
    }
    const videoSrc = props.video.id.videoId;
    return ( 
        <div>
            <VideoPlayer videoSrc = {videoSrc} />
            <br/>
            <h3>{props.video.snippet.title}</h3>
            <br/>
            <br/>
            <p>{props.video.snippet.description}</p>
            <AddComment addComment={props.addComment} videoSrc = {videoSrc}/>
            <DisplayComments getAllComments={props.getAllComments}/>
        </div>
     );
}
 
export default VideoInfo;