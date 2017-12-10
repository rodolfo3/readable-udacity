import { HOST, getAuthorization } from './config';

import { loadedPost } from './posts';
import { loadedComment } from './comments';

const BY_TYPE = {
  'posts': loadedPost,
  'comments': loadedComment,
}


const computeVote = ({ kind, response }) => {
  console.log('computeVote', kind, response);
  return BY_TYPE[kind](response);
};


export const vote = ({ kind, id, type }) =>
  (dispatch) => {
    console.log('VOTE');
    return fetch(
      `${HOST}/api/${kind}/${id}`,
      {
        method: 'POST',
        body: JSON.stringify({
          option: `${type}Vote`,
        }),
        headers: {
          'content-type': 'application/json',
          Authorization: getAuthorization(),
        }
      }
    )
    .then(response => response.json())
    .then(response => dispatch(computeVote({ kind, response })))
  }
;
