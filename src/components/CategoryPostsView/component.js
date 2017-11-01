import React from 'react';
import { Link } from 'react-router-dom';


const PostLink = ({ id, title }) =>
  <li>
    <Link to={`/posts/${id}`}>
      { title }
    </Link>
  </li>


const CategoryPostsView = ({ category, posts }) => {
  return (
    <section>
      <h2>
        { category.name }
      </h2>
      { posts.map(post => <PostLink key={post.id} {...post} />) }
    </section>
  );
};


export default CategoryPostsView;
