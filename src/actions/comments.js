import { HOST, getAuthorization } from './config';
import { persist } from './_helpers';


export const LOADED = 'COMMENTS_LOADED';
export const SAVE_ERROR = 'COMMENTS_SAVE_ERROR';
export const SAVED = 'COMMENTS_SAVED';
export const DELETED = 'COMMENTS_DELETED';


const loadedComments = (comments) => ({
  type: LOADED,
  comments,
});

const deletedComment = ({ comment }) => ({
  type: DELETED,
  comment,
});

const persistComment = (commentData) =>
  (dispatch) => {
    return persist(commentData, 'comments')
      .then(
        comment => dispatch({
          type: SAVED,
          comment,
        })
      )
  }
;


export const loadPostComments = (postId) =>
  (dispatch) =>
    fetch(`${HOST}/api/posts/${postId}/comments`, { headers: { Authorization: getAuthorization() }})
      .then(response => response.json())
      .then(comments => dispatch(loadedComments(comments)))

export const saveComment = (commentData) =>
  (dispatch) => {
    console.log('persistComment', commentData);
    return dispatch(persistComment(commentData));
  }
;


export const deleteComment = ({ id }) =>
  (dispatch, getState) =>
    fetch(
      `${HOST}/api/comments/${id}`,
      {
        method: 'DELETE',
        headers: { Authorization: getAuthorization() },
      },
    ).then(
      () => {
        const comment = getState().comments.byId[id];
        return dispatch(deletedComment({ comment }));
      }
    )
