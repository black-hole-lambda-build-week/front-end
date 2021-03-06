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
    DELETE_NOTE_FAILURE,
    LOGOUT
} from '../actions';

const initialState = {
    notes: [],
    isFetching: false,
    addingNote: false,
    updatingNote: false,
    deletingNote: false,
    noteSelected: false,
    error: null
}

export const reducer = (state = initialState, action) => {
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
                notes: [...state.notes, {
                    message: action.payload[0],
                    id: action.payload[1],
                    expirationDate: action.payload[2],
                    numberOfDays: action.payload[3]
                }],
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
            const deleted = state.notes.filter(dump => dump.id !== action.payload)
            return {
                ...state,
                notes: deleted,
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
            const newNotes = state.notes.map(note => {
                if (note.id === action.payload.id) {
                    return note = action.payload
                } else {
                    return note
                }
            })
            console.log('newNotes', action.payload)
            return {
                ...state,
                notes: newNotes,
                updatingNote: false
            };
        case UPDATE_NOTE_FAILURE:
            return {
                ...state,
                updatingNote: false,
                error: action.payload
            };
        case LOGOUT:
            return {
                ...state,
                notes: []
            }
        default:
            return state;
    }
}
export default reducer;