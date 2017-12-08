import React from 'react';
import { Link } from 'react-router-dom';

import AddComment from './AddComment';
import Vote from '../Vote';


const PostVote = (props) => <Vote kind='posts' {...props} />;
const CommentVote = (props) => <Vote kind='comments' {...props} />;


const Delete = ({ id, action}) =>
  <button onClick={() => action(id)}>
    &times;
  </button>
;


const EditPost = ({ id }) =>
  <Link to={`/posts/${id}/edit`}>
    edit
  </Link>
;



const Comment = ({ id, body, author, deleteComment }) =>
  <p>
    { author } says:
    <blockquote>
      { body }
    </blockquote>
    <CommentVote id={id} />
    <Delete id={id} action={deleteComment} />
    <hr />
  </p>
;


const PostView = ({ post, comments, deleteComment, deletePost }) =>
  <article>
    <section>
      <h2>{ post.title }</h2>
      <div>
        by { post.author }
      </div>
      <article>
        { post.body }
      </article>
      <hr />
      <PostVote id={post.id} voteScore={post.voteScore} />
      <hr />
      <EditPost id={post.id} />
      <Delete id={post.id} action={deletePost} />
      <hr />
    </section>
    <section>
      { comments && comments.map(c => <Comment key={c.id} deleteComment={deleteComment} {...c} />) }
    </section>
    <AddComment />
  </article>
;


export default PostView;
