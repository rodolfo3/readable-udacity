import React from 'react';


const CategoryPostsView = ({ category, posts }) => {
  return <pre>
    { JSON.stringify(category, null, '  ') }!
    { JSON.stringify(posts, null, '  ') }!
  </pre>
};


export default CategoryPostsView;
