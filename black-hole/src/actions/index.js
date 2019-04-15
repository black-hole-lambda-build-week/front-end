import auth from '../utilities';
export const LOGIN = 'LOGIN',
    REGISTER = 'REGISTER',
    LOGIN_SUCCESS = 'LOGIN_SUCCESS',
    LOGIN_FAILURE = 'LOGIN_FAILURE',
    FETCH = 'FETCH',
    FETCHED = 'FETCHED',
    LOGOUT = 'LOGOUT'

export const register = creds => dispatch => {
    auth()
        .post('https://blackhole-app.herokuapp.com/register', creds)
        .then(res => {
            localStorage.setItem('user', JSON.stringify(creds))
            dispatch({
                type: REGISTER,
                payload: res.data
            })
        })
}

export const toLogin = () => dispatch => {
    dispatch({
        type: LOGIN
    })
}

export const login = creds => dispatch => {
    auth()
        .post('https://blackhole-app.herokuapp.com/login', creds)
        .then(res => {
            localStorage.setItem('user', JSON.stringify(creds))
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data.payload
            })
        })
        .catch(err => dispatch({
            type: LOGIN_FAILURE,
            payload: err
        }))
}

export const fetch = () => dispatch => {
    dispatch({ type: FETCH })
    auth()
        .get('https://blackhole-app.herokuapp.com/orbit')
        .then(res => dispatch({
            type: FETCHED,
            payload: res.data
        }))
}

export const logout = () => dispatch => {
    dispatch({
        type: LOGOUT
    })
}