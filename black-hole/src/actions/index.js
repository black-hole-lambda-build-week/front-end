import auth from '../utilities';
export const
    LOGIN = 'LOGIN',
    TO_HOME = 'TO_HOME',
    REGISTER = 'REGISTER',
    LOGIN_SUCCESS = 'LOGIN_SUCCESS',
    LOGIN_FAILURE = 'LOGIN_FAILURE',
    LOGOUT = 'LOGOUT',
    FETCH_DATA_START = 'FETCH_DATA_START',
    FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS',
    FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE',
    ADD_NOTE_START = 'ADD_NOTE_START',
    ADD_NOTE_SUCCESS = 'ADD_NOTE_SUCCESS',
    ADD_NOTE_FAILURE = 'ADD_NOTE_FAILURE',
    UPDATE_NOTE_START = 'UPDATE_NOTE_START',
    UPDATE_NOTE_SUCCESS = 'UPDATE_NOTE_SUCCESS',
    UPDATE_NOTE_FAILURE = 'UPDATE_NOTE_FAILURE',
    DELETE_NOTE_START = 'DELETE_NOTE_START',
    DELETE_NOTE_SUCCESS = 'DELETE_NOTE_SUCCESS',
    DELETE_NOTE_FAILURE = 'DELETE_NOTE_FAILURE',
    ROUTE = 'ROUTE',
    UNROUTE = 'UNROUTE';

const URL = 'https://blackhole-app.herokuapp.com';

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
            console.log('login', res.data)
            localStorage.setItem('user', JSON.stringify(creds))
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            })
            localStorage.setItem('userId', res.data.id)
        })
        .catch(err => dispatch({
            type: LOGIN_FAILURE,
            payload: err
        }))
}

export const toHome = () => dispatch => {
    dispatch({
        type: TO_HOME
    })
}

export const logout = () => dispatch => {
    dispatch({
        type: LOGOUT
    })
}

export const fetchingData = userId => dispatch => {
    dispatch({ type: FETCH_DATA_START });
    return auth()
        .get(`${URL}/orbit/users/${userId}`) //make sure this link gets filled in
        .then(res => {
            dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data });
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: FETCH_DATA_FAILURE, payload: err.data });
        })
}

export const addNote = note => dispatch => {
    dispatch({ type: ADD_NOTE_START });
    return auth()
        .post(`${URL}/orbit`, note) //make sure this link gets filled in
        .then(res => {
            dispatch({
                type: ADD_NOTE_SUCCESS,
                payload: res.data
            });
        })
        .catch(err => {
            console.log(err);
            dispatch({
                type: ADD_NOTE_FAILURE, payload: err.data
            });
        })
}

export const updateNote = (id, note) => dispatch => {
    dispatch({ type: UPDATE_NOTE_START });
    return auth()
        .put(`${URL}/orbit/${id}`, note) //make sure this link gets filled in
        .then(res => {
            console.log('update', res);
            dispatch({
                type: UPDATE_NOTE_SUCCESS,
                payload: res.data
            });
        })
        .catch(err => {
            console.log(err);
            dispatch({
                type: UPDATE_NOTE_FAILURE,
                payload: err.data
            });
        })
}

export const deleteNote = id => dispatch => {
    dispatch({ type: DELETE_NOTE_START });
    console.log(id)
    return auth()
        .delete(`${URL}/orbit/${id}`) //make sure this link gets filled in
        .then(res => {
            console.log(res);
            dispatch({
                type: DELETE_NOTE_SUCCESS,
                payload: id
            });
        })
        .catch(err => {
            console.log(err);
            dispatch({
                type: DELETE_NOTE_FAILURE,
                payload: err.data
            });
        })
}
