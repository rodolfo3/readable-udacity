import { HOST, getAuthorization } from './config';
import { persist } from './_helpers';


export const LOADED = 'COMMENTS_LOADED';
export const SAVE_ERROR = 'COMMENTS_SAVE_ERROR';
export const SAVED = 'COMMENTS_SAVED';


const loadedComments = (comments) => ({
  type: LOADED,
  comments,
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
