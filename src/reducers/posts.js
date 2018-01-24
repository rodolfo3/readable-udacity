import { combineReducers } from 'redux';
import { LOADED, SAVED, DELETED } from '../actions/posts';


const byId = (state = {}, action) => {
  switch (action.type) {
    case DELETED:
      const { post } = action;
      const { id } = post;

      const newState = {...state};
      delete newState[post.id];  // TODO is this ok to remove the post from the state?
      return newState;

    case LOADED:
    case SAVED:
      const newPosts = action.posts.reduce((acc, p) => ({...acc, [p.id]: p}), {});
      return ({...state, ...newPosts});

    default:
      return state;
  }
};

const byCategory = (state = {}, action) => {
  switch (action.type) {
    case DELETED:
      const { post } = action;
      const { category }  = post;
      if (state[category]) {
        return {
          ...state,
          [category]: state[category].filter(i => i !== post.id),
        };
      } else {
        return state;
      }
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
