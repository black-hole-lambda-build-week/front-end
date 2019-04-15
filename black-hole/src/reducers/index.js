import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE, FETCH, FETCHED, LOGOUT } from '../actions';

const initialState = {
    loggingIn: false,
    loggedIn: false,
    fetching: false,
    fetched: false,
    dumps: [],
    user: {}
}

export default (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                loggingIn: true
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                loggedIn: true,
                loggingIn: false,
                user: JSON.parse(localStorage.getItem('user'))
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                loggingIn: false
            }
        case FETCH:
            return {
                ...state,
                fetching: true
            }
        case FETCHED:
            return {
                ...state,
                fetched: true,
                fetching: false,
                dumps: action.payload
            }
        case LOGOUT:
            return {
                ...state,
                loggedIn: false
            }
        default:
            return state;
    }
}