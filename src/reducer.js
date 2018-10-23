import {combineReducers} from 'redux';
import common from './reducers/common';
import article from './reducers/article';






export default combineReducers({
	common,
	article
})