import axios from 'axios';

export default () => {
    const token = localStorage.getItem('token');

    return axios.create({
        headers: {
            Authorization: `${token}`,
            'Content-Type': 'application/json'
        }
    })
}