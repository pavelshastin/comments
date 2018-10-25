import {
  APP_LOAD,
  TAB_CHANGE
  
} from '../constants/actionTypes';

const defaultState = {
  activeTabIndex: 0,
}


export default (state = defaultState, action) => {
  switch (action.type) {
    case APP_LOAD:   
      return {...state,
        appLoaded: true,
        articles: action.payload
      };
     case TAB_CHANGE:
       return {
        ...state,
        activeTabIndex: action.index
       }; 
            
    default:
      return state;
  }
};
