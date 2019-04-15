import { combineReducers } from 'redux';
import reducer from './index';
import { reducer as chreducer } from './chred'

export default combineReducers({ login: reducer, note: chreducer });
