import axios from "axios";

const URL = "";

export const FETCH_DATA_START = "FETCH_PHOTO_START";
export const FETCH_DATA_SUCCESS = "FETCH_PHOTO_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_PHOTO_FAILURE";

export const fetchingData = () => dispatch => {
  dispatch({ type: FETCH_DATA_START });
  return axios
    .get(`${URL}`) //make sure this link gets filled in
    .then(res => {
      console.log(res);
      dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: FETCH_DATA_FAILURE, payload: err.data });
    });
};
//---------------------------------------------------------------------------
export const ADD_NOTE_START = "ADD_NOTE_START";
export const ADD_NOTE_SUCCESS = "ADD_NOTE_SUCCESS";
export const ADD_NOTE_FAILURE = "ADD_NOTE_FAILURE";

export const addNote = note => dispatch => {
  dispatch({ type: ADD_NOTE_START });
  return axios
    .post(`${URL}`, note) //make sure this link gets filled in
    .then(res => {
      console.log(res);
      dispatch({ type: ADD_NOTE_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: ADD_NOTE_FAILURE, payload: err.data });
    });
};
//---------------------------------------------------------------------------
export const UPDATE_NOTE_START = "UPDATE_NOTE_START";
export const UPDATE_NOTE_SUCCESS = "UPDATE_NOTE_SUCCESS";
export const UPDATE_NOTE_FAILURE = "UPDATE_NOTE_FAILURE";

export const updateNote = (id, note) => dispatch => {
  dispatch({ type: UPDATE_NOTE_START });
  return axios
    .put(`${URL} ${id}`, note) //make sure this link gets filled in
    .then(res => {
      console.log(res);
      dispatch({ type: UPDATE_NOTE_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: UPDATE_NOTE_FAILURE, payload: err.data });
    });
};
//---------------------------------------------------------------------------
export const DELETE_NOTE_START = "DELETE_NOTE_START";
export const DELETE_NOTE_SUCCESS = "DELETE_NOTE_SUCCESS";
export const DELETE_NOTE_FAILURE = "DELETE_NOTE_FAILURE";

export const deleteNote = id => dispatch => {
  dispatch({ type: DELETE_NOTE_START });
  return axios
    .delete(`${URL}${id}`) //make sure this link gets filled in
    .then(res => {
      console.log(res);
      dispatch({ type: DELETE_NOTE_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: DELETE_NOTE_FAILURE, payload: err.data });
    });
};

//---------------------------------------------------------------------------
