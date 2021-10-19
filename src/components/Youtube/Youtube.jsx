import axios from "axios";
const KEY = 'AIzaSyD_TOCmtpNdfCJuibaTjVk0KYOGC5tMLfE';

export default axios.create({

    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 7,
        key: KEY,
        type: 'video',
    }
})