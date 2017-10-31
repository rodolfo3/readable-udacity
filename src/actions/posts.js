import { HOST, getAuthorization } from './config';


export const LOADED = 'POSTS_LOADED';


const loadedCategoryPosts = (categoryPath, posts) => ({
  type: LOADED,
  categoryPath,
  posts,
});


export const loadCategoryPosts = (categoryPath) =>
  (dispatch) =>
    fetch(`${HOST}/api/${categoryPath}/posts`, { headers: { Authorization: getAuthorization() }})
      .then(response => response.json())
      .then(ps => dispatch(loadedCategoryPosts(categoryPath, ps)))
;
