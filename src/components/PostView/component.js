import React from 'react';
import AddComment from './AddComment';
import Vote from '../Vote';


const PostVote = (props) => <Vote kind='posts' {...props} />;
const CommentVote = (props) => <Vote kind='comments' {...props} />;


const DeleteComment = ({ id, deleteComment}) =>
  <button onClick={() => deleteComment(id)}>
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
    <DeleteComment id={id} deleteComment={deleteComment} />
  </p>
;


const PostView = ({ post, comments, deleteComment }) =>
  <article>
    <section>
      <h2>{ post.title }</h2>
      { post.body }
      <PostVote id={post.id} />
    </section>
    <section>
      { comments && comments.map(c => <Comment key={c.id} deleteComment={deleteComment} {...c} />) }
    </section>
    <AddComment />
  </article>
;


export default PostView;
