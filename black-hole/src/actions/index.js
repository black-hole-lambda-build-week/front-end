import auth from '../utilities';
export const LOGIN = 'LOGIN',
    LOGIN_SUCCESS = 'LOGIN_SUCCESS',
    LOGIN_FAILURE = 'LOGIN_FAILURE',
    FETCH = 'FETCH',
    FETCHED = 'FETCHED',
    LOGOUT = 'LOGOUT'

export const toLogin = () => dispatch => {
    dispatch({
        type: LOGIN
    })
}

export const login = creds => dispatch => {
    auth()
        .post('http://localhost:5000/api/login', creds)
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
        .get('http://localhost:5000/api/dumps')
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