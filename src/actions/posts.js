import { HOST, getAuthorization } from './config';


export const LOADED = 'POSTS_LOADED';
export const SAVE_ERROR = 'POST_SAVE_ERROR';
export const SAVED = 'POST_SAVED';


const loadedCategoryPosts = (categoryPath, posts) => ({
  type: LOADED,
  categoryPath,
  posts,
});


const loadedPost = (post) => ({
  type: LOADED,
  posts: [post],
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


const validatePost = (postData) => {
  // TODO
  return false;
};

const saveError = (errors) => ({
  type: SAVE_ERROR,
  errors,
})


const persistPost = (postData) =>
  (dispatch) => {
    const { id } = postData;
    const url = id ? `${HOST}/api/posts/${id}` : `${HOST}/api/posts`;
    const method = id ? 'PUT' : 'POST';
    return fetch(
      url,
      {
        method,
        body: JSON.stringify(postData),
        headers: {
          'content-type': 'application/json',
          Authorization: getAuthorization(),
        }
      }
    )
    .then(response => response.json())
    .then(
      post => dispatch({
        type: SAVED,
        posts: [ post ],
        categoryPath: post.category,
      })
    );
};

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
