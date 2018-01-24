import React from 'react';
import { Link } from 'react-router-dom';

import { PostVote, DeletePost, EditPost } from '../PostCommons';


const PostLink = ({ id, author, title, commentCount, voteScore, deletePost }) =>
  <li>
    <Link to={`/posts/${id}`}>
      { title }
    </Link>

    <br/>
    by { author }

    <br/>
    { commentCount } comments

    <br/>
    <PostVote id={id} voteScore={voteScore} />

    <br/>
    <EditPost id={id} />
    <DeletePost id={id} action={deletePost} />

    <hr/>
  </li>


const SortOption = ({ field, label = null, sortedBy, sort }) =>
  <label>
    <input checked={sortedBy === field} type="checkbox" onClick={() => sort(field) } />
    { label || field }
  </label>
;


const PostList = ({ posts, sort, sortedBy, deletePost }) =>
  <div>
    Sort by:
      <SortOption field='voteScore' sortedBy={sortedBy} sort={sort} />
      <SortOption field='timestamp' sortedBy={sortedBy} sort={sort} />
    <ul>
      { posts.map(post => <PostLink key={post.id} {...post} deletePost={deletePost} />) }
    </ul>
  </div>
;


export default PostList;
