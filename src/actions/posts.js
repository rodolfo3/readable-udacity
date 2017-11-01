import { HOST, getAuthorization } from './config';


export const LOADED = 'POSTS_LOADED';


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
