const HOST = `${window.location.protocol}//${window.location.hostname}:3001`;


export const LOADED = 'CATEGORIES_LOADED';


const loadedCategories = (categories) => ({
  type: LOADED,
  categories
});


export const loadCategories = () =>
  (dispatch) => {
    fetch(`${HOST}/api/categories`, { headers: { Authorization: 'something' }})
      .then(response => response.json())
      .then(body => body.categories)
      .then(c => dispatch(loadedCategories(c)))
  }
;
