import { HOST, getAuthorization } from './config';


export const persist = (data, objectType) => {
  const { id } = data;
  const url = id ? `${HOST}/api/${objectType}/${id}` : `${HOST}/api/${objectType}`;
  const method = id ? 'PUT' : 'POST';

  return fetch(
    url,
    {
      method,
      body: JSON.stringify(data),
      headers: {
        'content-type': 'application/json',
        Authorization: getAuthorization(),
      }
    }
  )
  .then(response => response.json())
};
