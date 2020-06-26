import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization:
            'Client-ID r9NqnLidh5pkV_v2kROB_joPV0-2yDN7QF7seahjHJI'
    }
});