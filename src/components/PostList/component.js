import React from 'react';
import { Link } from 'react-router-dom';


const PostLink = ({ id, title, voteScore }) =>
  <li>
    <Link to={`/posts/${id}`}>
      { title } ({ voteScore })
    </Link>
  </li>


const SortOption = ({ field, label = null, sortedBy, sort }) =>
  <label>
    <input checked={sortedBy === field} type="checkbox" onClick={() => sort(field) } />
    { label || field }
  </label>
;


const PostList = ({ posts, sort, sortedBy }) =>
  <div>
    Sort by:
      <SortOption field='voteScore' sortedBy={sortedBy} sort={sort} />
      <SortOption field='timestamp' sortedBy={sortedBy} sort={sort} />
    <ul>
      { posts.map(post => <PostLink key={post.id} {...post} />) }
    </ul>
  </div>
;


export default PostList;
