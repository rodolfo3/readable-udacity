import { HOST, getAuthorization } from './config';
import { persist } from './_helpers';

export const LOADED = 'POSTS_LOADED';
export const SAVE_ERROR = 'POST_SAVE_ERROR';
export const SAVED = 'POST_SAVED';
export const DELETED = 'POST_DELETED';


const loadedCategoryPosts = (categoryPath, posts) => ({
  type: LOADED,
  categoryPath,
  posts,
});


export const loadedPost = (post) => loadedPosts([post]);


const loadedPosts = (posts) => ({
  type: LOADED,
  posts,
});


class RequestError extends Error {
  constructor(message, response) {
    super(message);
    this.response = response;
  }
}


const fetchJson = url => (
  fetch(url, { headers: { Authorization: getAuthorization() }})
    .then(response => {
      if (!response.ok) {
        return response.text().then(msg => { throw new RequestError(msg, response); });
      }
      return response.json();
    })
);


export const loadPost = (id) =>
  (dispatch) =>
    fetchJson(`${HOST}/api/posts/${id}`)
      .then(post => dispatch(loadedPost(post)))
;

export const loadCategoryPosts = (categoryPath) =>
  (dispatch) =>
    fetchJson(`${HOST}/api/${categoryPath}/posts`)
      .then(ps => dispatch(loadedCategoryPosts(categoryPath, ps)))
;


export const loadAllPosts = () =>
  (dispatch) =>
    fetchJson(`${HOST}/api/posts`)
      .then(ps => dispatch(loadedPosts(ps)))
;


const validatePost = (postData) => {
  // TODO
  return false;
};

const saveError = (errors) => ({
  type: SAVE_ERROR,
  errors,
})


const persistPost = (postData) =>
  (dispatch) =>
    persist(postData, 'posts')
      .then(
        post => dispatch({
          type: SAVED,
          posts: [ post ],
          categoryPath: post.category,
        })
      )
;

export const savePost = (postData) =>
  (dispatch) => {
    const errors = validatePost(postData);
    if (errors) {
      return dispatch(saveError(errors));
    } else {
      return dispatch(persistPost(postData));
    }
  }
;

const deletedPost = ({ post }) => ({
  type: DELETED,
  post,
});

export const deletePost = ({ id }) =>
  (dispatch, getState) =>
    fetch(
      `${HOST}/api/posts/${id}`,
      {
        method: 'DELETE',
        headers: { Authorization: getAuthorization() },
      },
    ).then(
      () => {
        const post = getState().posts.byId[id];
        return dispatch(deletedPost({ post }));
      }
    );
