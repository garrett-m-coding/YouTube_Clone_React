import React, {useEffect, useState} from 'react';


const VideoPlayer = (props) => {
    const [selectedVideo, setSelectedVideo ] = useState()

    useEffect(() => {
        if (props.videoSrc != null && props.videoSrc !== undefined)
        {
            setSelectedVideo(props.videoSrc) 
        }
    },[props])

    return ( 
        <div>
            <h3>Video Player</h3>
                <iframe width = "100%" height = "500" src={`https://www.youtube.com/embed/${selectedVideo}`} title="YouTube video player"></iframe>     
        </div>
     );
}
 
export default VideoPlayer;