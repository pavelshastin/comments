import {
  ARTICLE_PAGE_LOADED
  
} from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case ARTICLE_PAGE_LOADED:
      return {
        ...state.article,
        article: action.payload
      }
    
    default:
      return state;
  }
};
