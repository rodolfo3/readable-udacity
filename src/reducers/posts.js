import { LOADED } from '../actions/posts';


const posts = (state = null, action) => {
  switch (action.type) {
    case LOADED:
      return action.posts;

    default:
      return state;
  }
}


export default posts;
