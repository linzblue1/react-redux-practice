import { combineReducers } from 'redux';
import catReducer from './cat'

export default combineReducers({ cats: catReducer })