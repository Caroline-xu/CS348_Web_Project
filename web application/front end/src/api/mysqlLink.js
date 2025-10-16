import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 6x9_JjWwjOgirrVNcGuS8c00Qz6X1EpG5GvCqQ823QA'
    }
})