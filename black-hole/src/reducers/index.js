import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE, FETCH, FETCHED } from '../actions';

const initialState = {
    loggingIn: false,
    loggedIn: false,
    fetching: false,
    fetched: false,
    dumps: []
}

export default (state = initialState, action) => {
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
                loggingIn: false
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
        default:
            return state;
    }
}