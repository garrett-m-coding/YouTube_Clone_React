import React from 'react';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import DisplayComments from '../DisplayComments/DisplayComments';
import AddComment from '../AddComment/AddComment';
import './VideoInfo.css'

const VideoInfo = (props) => {
    if (!props.video) {
        return <div>Please search for a video, then click on your selection.</div>;
    }
    const videoSrc = props.video.id.videoId;
    return ( 
        <div>
            <VideoPlayer videoSrc = {videoSrc} />
            <br/>
            <h3 className="title">{props.video.snippet.title}</h3>
            <br/>
            {console.log(props.comments)}
            <p className="title">{props.video.snippet.description}</p>
            <AddComment 
              addComment={props.addComment} 
              videoSrc = {videoSrc}/>
            <DisplayComments 
              getAllComments={props.getAllComments} 
              comments = {props.comments} 
              videoSrc = {videoSrc}/>
        </div>
     );
}
 
export default VideoInfo;