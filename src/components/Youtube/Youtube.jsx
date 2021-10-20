import axios from "axios";
const KEY = 'AIzaSyC5486ZAlOwzgJqpBJW6y5L5_cjCdRUY7Q';

export default axios.create({

    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 7,
        key: KEY,
        type: 'video',
    }
})