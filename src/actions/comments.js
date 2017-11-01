import { HOST, getAuthorization } from './config';


export const LOADED = 'COMMENTS_LOADED';


const loadedComments = (comments) => ({
  type: LOADED,
  comments,
});


export const loadPostComments = (postId) =>
  (dispatch) =>
    fetch(`${HOST}/api/posts/${postId}/comments`, { headers: { Authorization: getAuthorization() }})
      .then(response => response.json())
      .then(comments => dispatch(loadedComments(comments)))

