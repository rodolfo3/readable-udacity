import { combineReducers } from 'redux';
import { LOADED, SAVED } from '../actions/posts';


const byId = (state = {}, action) => {
console.log('byId', action, action.type === LOADED);
  switch (action.type) {
    case LOADED:
    case SAVED:
      console.log("!!!", action);
      const newPosts = action.posts.reduce((acc, p) => ({...acc, [p.id]: p}), {});
      return ({...state, ...newPosts});

    default:
      return state;
  }
};

const byCategory = (state = {}, action) => {
  switch (action.type) {
    case SAVED:
    case LOADED:
      if (action.categoryPath) {
        const postIds = action.posts.map(p => p.id)
        return {...state, [action.categoryPath]: postIds };
      } else {
        return state;
      }

    default:
      return state;
  }
}


export default combineReducers({ byId, byCategory });
