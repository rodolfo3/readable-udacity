import React from 'react';
import PostList from '../PostList/container';


const CategoryPostsView = ({ category, posts }) => {
  return (
    <section>
      <h2>
        { category.name }
      </h2>
      <PostList posts={posts} />
    </section>
  );
};


export default CategoryPostsView;
