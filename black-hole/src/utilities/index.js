import axios from 'axios';
import Cookies from 'js-cookie'

export default () => {
    const token = !window.localStorage ? Cookies.get('token') : JSON.parse(localStorage.getItem('token'));

    return axios.create({
        headers: {
            Authorization: `${token}`,
            'Content-Type': 'application/json'
        }
    })
}