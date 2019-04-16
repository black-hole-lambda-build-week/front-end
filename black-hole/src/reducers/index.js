import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT, TO_HOME } from '../actions';

const initialState = {
    loggingIn: false,
    loggedIn: false,
    home: false,
    dumps: [],
    globalDumps: [],
    user: {},
    route: false
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
                user: JSON.parse(localStorage.getItem('user'))
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                loggingIn: false
            }
        case TO_HOME:
            if (state.loggedIn) {
                return {
                    ...state,
                    home: true
                }
            } else {
                return {
                    ...state,
                    loggingIn: false
                }
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