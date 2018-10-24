import {
  EDITOR_PAGE_LOADED,
  EDITOR_PAGE_UNLOADED,
  ARTICLE_SUBMITTED,
  ASYNC_START,
  ADD_TAG,
  REMOVE_TAG,
  UPDATE_FIELD_EDITOR
} from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case EDITOR_PAGE_LOADED:

      let comment

      if (action.payload && action.commentId) {

          action.payload.forEach(article => {
              const _comment = article.comments.filter(comment => comment.id === action.commentId)
              
              if(_comment.length > 0) comment = _comment[0];
          })
      }

      alert(JSON.stringify(comment))

      return {
        ...state,
        articles: action.payload ? action.payload : [],
        appLoaded: action.payload ? true : false,
        commentId: comment ? comment.id : '',
        commentText: comment ? comment.text : '',
        commenterId: comment ? comment.commenter.id : '',
        commenterName: comment ? comment.commenter.name : ''
        
      };
    case EDITOR_PAGE_UNLOADED:
      return {};
    case ARTICLE_SUBMITTED:
      return {
        ...state,
        inProgress: null,
        errors: action.error ? action.payload.errors : null
      };
    case ASYNC_START:
      if (action.subtype === ARTICLE_SUBMITTED) {
        return { ...state, inProgress: true };
      }
      break;
    case ADD_TAG:
      return {
        ...state,
        tagList: state.tagList.concat([state.tagInput]),
        tagInput: ''
      };
    case REMOVE_TAG:
      return {
        ...state,
        tagList: state.tagList.filter(tag => tag !== action.tag)
      };
    case UPDATE_FIELD_EDITOR:
      return { ...state, [action.key]: action.value };
    default:
      return state;
  }

  return state;
};
