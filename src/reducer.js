import {combineReducers} from 'redux';
import common from './reducers/common';
import article from './reducers/article';
import editor from './reducers/editor';





export default combineReducers({
	common,
	article,
	editor 
})