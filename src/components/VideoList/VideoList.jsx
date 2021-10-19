import React from 'react';
import Video from '../Video/Video';

const VideoList = (props) => {
    const renderedVideos =  props.videos.map((video) => {
        return <Video key={video.id.videoId} video={video} handleVideoSelect={props.handleVideoSelect} />
    });

    return (
        <div>
            {renderedVideos}
        </div>
    );
};
export default VideoList;