import {
    FETCH_DATA_START,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE,
    ADD_NOTE_START,
    ADD_NOTE_SUCCESS,
    ADD_NOTE_FAILURE,
    UPDATE_NOTE_START,
    UPDATE_NOTE_SUCCESS,
    UPDATE_NOTE_FAILURE,
    DELETE_NOTE_START,
    DELETE_NOTE_SUCCESS,
    DELETE_NOTE_FAILURE
  } from "../actions";
  
  const initialState = {
    notes: [],
    isFetching: false,
    addingNote: false,
    updatingNote: false,
    deletingNote: false,
    noteSelected: false,
    error: null
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_DATA_START:
        return {
          ...state,
          isFetching: true
        };
      case FETCH_DATA_SUCCESS:
        return {
          ...state,
          notes: action.payload,
          isFetching: false
        };
      case FETCH_DATA_FAILURE:
        return {
          ...state,
          isFetching: false,
          error: action.payload
        };
      case ADD_NOTE_START:
        return {
          ...state,
          addingNote: true
        };
      case ADD_NOTE_SUCCESS:
        return {
          ...state,
          notes: action.payload,
          addingNote: false
        };
      case ADD_NOTE_FAILURE:
        return {
          ...state,
          addingNote: false,
          error: action.payload
        };
      case DELETE_NOTE_START:
        return {
          ...state,
          deletingNote: true
        };
      case DELETE_NOTE_SUCCESS:
        return {
          ...state,
          notes: action.payload,
          deletingNote: false
        };
      case DELETE_NOTE_FAILURE:
        return {
          ...state,
          deletingNote: false,
          error: action.payload
        };
      case UPDATE_NOTE_START:
        return {
          ...state,
          updatingNote: true
        };
      case UPDATE_NOTE_SUCCESS:
        return {
          ...state,
          notes: action.payload,
          updatingNote: false
        };
      case UPDATE_NOTE_FAILURE:
        return {
          ...state,
          updatingNote: false,
          error: action.payload
        };
      default:
        return state;
    }
  };
  export default reducer;
  