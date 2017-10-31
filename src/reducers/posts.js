import { combineReducers } from 'redux';
import { LOADED } from '../actions/posts';


const byId = (state = {}, action) => {
  switch (action.type) {
    case LOADED:
      const newPosts = action.posts.reduce((acc, p) => ({...acc, [p.id]: p}), {});
      return ({...state, ...newPosts});

    default:
      return state;
  }
};

const byCategory = (state = {}, action) => {
  switch (action.type) {
    case LOADED:
      const postIds = action.posts.map(p => p.id)
      return {...state, [action.categoryPath]: postIds };

    default:
      return state;
  }
}


export default combineReducers({ byId, byCategory });
