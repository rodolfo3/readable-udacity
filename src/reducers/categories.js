import { LOADED } from '../actions/categories';


const categories = (state = null, action) => {
  switch (action.type) {
    case LOADED:
      return action.categories;

    default:
      return state;
  }
}


export default categories;
