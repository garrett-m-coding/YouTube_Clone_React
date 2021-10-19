import React, {useEffect, useState} from 'react';


const VideoPlayer = (props) => {
    const [selectedVideo, setSelectedVideo ] = useState('eVTXPUF4Oz4')

    useEffect(() => {
        if (props.videoSrc != null && props.videoSrc !== undefined)
        {
            setSelectedVideo(props.videoSrc) 
        }
    },[props])

    return ( 
        <div>
            <h3>Video Player</h3>
                <iframe width = "800" height = "450" src={`https://www.youtube.com/embed/${selectedVideo}`} title="YouTube video player"></iframe>     
        </div>
     );
}
 
export default VideoPlayer;