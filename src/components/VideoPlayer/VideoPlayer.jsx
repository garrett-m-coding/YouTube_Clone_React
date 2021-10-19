import React from 'react';


const VideoPlayer = (props) => {
    let currentVideoUrl = "https://www.youtube.com/embed/" + "eVTXPUF4Oz4"
    console.log(currentVideoUrl)
    return ( 
        <div>
            <h3>Video Player</h3>
            <iframe width = "800" height = "450" src="https://www.youtube.com/embed/eVTXPUF4Oz4" title="YouTube video player"></iframe>     
            {/* <iframe width = "800" height = "450" src={currentVideoUrl} title="YouTube video player"></iframe>      */}

        </div>
     );
}
 
export default VideoPlayer;