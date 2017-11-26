import { HOST, getAuthorization } from './config';


export const vote = ({ kind, id, type }) => {
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
};
