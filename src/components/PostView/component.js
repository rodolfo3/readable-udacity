import React from 'react';
import AddComment from './AddComment';
import Vote from '../Vote';


const PostVote = (props) => <Vote kind='posts' {...props} />;
const CommentVote = (props) => <Vote kind='comments' {...props} />;


const Delete = ({ id, action}) =>
  <button onClick={() => action(id)}>
    &times;
  </button>
;


const Comment = ({ id, body, author, deleteComment }) =>
  <p>
    { author } says:
    <blockquote>
      { body }
    </blockquote>
    <CommentVote id={id} />
    <Delete id={id} action={deleteComment} />
  </p>
;


const PostView = ({ post, comments, deleteComment, deletePost }) =>
  <article>
    <section>
      <h2>{ post.title }</h2>
      { post.body }
      <PostVote id={post.id} />
      <Delete id={post.id} action={deletePost} />
    </section>
    <section>
      { comments && comments.map(c => <Comment key={c.id} deleteComment={deleteComment} {...c} />) }
    </section>
    <AddComment />
  </article>
;


export default PostView;
