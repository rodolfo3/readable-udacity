import { HOST, getAuthorization } from './config';


export const LOADED = 'POSTS_LOADED';


const loadedCategoryPosts = (posts) => ({
  type: LOADED,
  posts,
});


export const loadCategoryPosts = (categoryPath) =>
  (dispatch) =>
    fetch(`${HOST}/api/${categoryPath}/posts`, { headers: { Authorization: getAuthorization() }})
      .then(response => response.json())
      .then(c => dispatch(loadedCategoryPosts(c)))
;
