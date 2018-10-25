import {
  EDITOR_PAGE_LOADED,
  COMMENT_SUBMITTED,
  ASYNC_START,
  REDIRECT,
  UPDATE_FIELD_EDITOR
} from '../constants/actionTypes';

const defaultState = {
    commenterChange: 0,
    commentChange: 0,
    redirectTo: "/",
    inProgress: null
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case EDITOR_PAGE_LOADED:
      let comment = []
      
      if(action.payload && action.commentId) {
          action.payload.forEach(article => {
              const _comment = article.comments.filter(comment => comment.id === action.commentId)

              if(_comment.length > 0) {
                comment = _comment[0]
              }
          })
      }
      

      return {
        ...state,
        articles: action.payload ? action.payload: [],
        appLoaded: true,
        commentId: comment.id ? comment.id : '',
        commentText: comment.text ? comment.text : '',
        commenterId: comment.commenter ? comment.commenter.id : '',
        commenterName: comment.commenter ? comment.commenter.name : '',
        commenterChange: 0,
        commentChange: 0
      };
    case COMMENT_SUBMITTED:
      //alert(JSON.stringify(action))
      
      if(action.payload) {
          const commenterId = state.commenterId
          const commenterName = state.commenterName
          const commentId = state.commentId
          const commentText = state.commentText
      
          if ((action.payload.success || action.payload.length === 2) && action.comment) {
              
              
              state.articles.forEach((article, index) => {
                for(let key in article.comments) {
                  if (article.comments[key].id === commentId) state.articles[index].comments[key].text = commentText
                }
              })

          }  

          if ((action.payload.success || action.payload.length === 2) && action.commenter) {
              
             
              state.articles.forEach((article, index) => {

              if (article.author.id === commenterId) state.articles[index].author.name = commenterName

              for(let key in article.comments) {
                if (article.comments[key].commenter.id === commenterId) state.articles[index].comments[key].commenter.name = commenterName
              }
            })
          

          } 

      }
      return {
        ...state,
        inProgress: null,
      };
    case ASYNC_START:
      if (action.subtype === COMMENT_SUBMITTED) {
        return { ...state, inProgress: true };
      }
      break;
    case REDIRECT:
      
      return {
        ...state,
        redirectTo: action.location
      };
    
    case UPDATE_FIELD_EDITOR:
          if (action.key === "commenterName") {
            state.commenterChange += 1
          }

          if (action.key === "commentText") {
            state.commentChange += 1
          }

          

      return { ...state, [action.key]: action.value };
    default:
      return state;
  }

  return state;
};
