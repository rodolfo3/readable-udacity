import { combineReducers } from 'redux';

import { SAVED, LOADED } from '../actions/comments';


const byPostId = (state = {}, action) => {
  switch (action.type) {
    case SAVED:
      const { comment } = action;
      const { parentId } = comment;

      return {
        ...state,
        [parentId]: [...state[parentId] || [], comment.id],
      };
    case LOADED:
      const postIds = action.comments.map(c => c.parentId);
      const comments = postIds.map(
        id => ({[id]: action.comments.filter(c => c.parentId === id).map(c => c.id)})
      ).reduce((acc, comm) => ({...acc, ...comm}), {});

      return {...state, ...comments};

    default:
      return state;
  }
};


const byId = (state = {}, action) => {
  switch (action.type) {
    case SAVED:
      const { comment } = action;
      return {...state, [comment.id]: comment};
    case LOADED:
      const newComments = action.comments.reduce(
        (acc, comment) => ({...acc, [comment.id]: comment}),
        {}
      );
      return {...state, ...newComments};

    default:
      return state;
  }
};

export default combineReducers({ byId, byPostId });
