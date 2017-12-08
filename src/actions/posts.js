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


const loadedPost = (post) => loadedPosts([post]);


const loadedPosts = (posts) => ({
  type: LOADED,
  posts,
});


export const loadPost = (id) =>
  (dispatch) =>
    fetch(`${HOST}/api/posts/${id}`, { headers: { Authorization: getAuthorization() }})
      .then(response => response.json())
      .then(post => dispatch(loadedPost(post)))
      .then(p => { console.log('loadPost', id); return p})
      .catch(err => console.error(err));
;

export const loadCategoryPosts = (categoryPath) =>
  (dispatch) =>
    fetch(`${HOST}/api/${categoryPath}/posts`, { headers: { Authorization: getAuthorization() }})
      .then(response => response.json())
      .then(ps => dispatch(loadedCategoryPosts(categoryPath, ps)))
;


export const loadAllPosts = () =>
  (dispatch) =>
    fetch(`${HOST}/api/posts`, { headers: { Authorization: getAuthorization() }})
      .then(response => response.json())
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
    console.log(errors);
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
