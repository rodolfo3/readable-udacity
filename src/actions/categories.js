import { HOST, getAuthorization } from './config';


export const LOADED = 'CATEGORIES_LOADED';


const loadedCategories = (categories) => ({
  type: LOADED,
  categories
});


export const loadCategories = () =>
  (dispatch) =>
    fetch(`${HOST}/api/categories`, { headers: { Authorization: getAuthorization() }})
      .then(response => response.json())
      .then(body => body.categories)
      .then(c => dispatch(loadedCategories(c)))
;
