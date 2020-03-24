import axios from 'axios';

class Networker {
    static get(url) {
        return axios.get(url);
    }

    static post(url, data) {
        return axios.post(url, data);
    }
}