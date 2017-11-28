import { combineReducers } from 'redux';

import { SAVED, LOADED, DELETED } from '../actions/comments';


const byPostId = (state = {}, action) => {
  switch (action.type) {
    case DELETED:
      return (() => {
        const { comment } = action;
        const { id, parentId } = comment;
        return {
          ...state,
          [parentId]: state[parentId].filter(i => i !== id),
        };
      })();
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
    case DELETED:
      return (() => {
        const { comment } = action;
        const { id } = comment;
        return Object.keys(state)
          .filter(obj => obj.id !== id)
          .reduce((obj, key) => {
            obj[key] = state[key]
            return obj;
          }, {});
        })();
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
