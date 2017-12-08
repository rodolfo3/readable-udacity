import React from 'react';
import { Link } from 'react-router-dom';


const PostLink = ({ id, title }) =>
  <li>
    <Link to={`/posts/${id}`}>
      { title }
    </Link>
  </li>


const PostList = ({ posts }) =>
  <ul>
    { posts.map(post => <PostLink key={post.id} {...post} />) }
  </ul>
;


export default PostList;
