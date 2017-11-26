import React from 'react';
import AddComment from './AddComment';
import Vote from '../Vote';


const PostVote = (props) => <Vote kind='posts' {...props} />;
const CommentVote = (props) => <Vote kind='comments' {...props} />;


const Comment = ({ id, body, author }) =>
  <p>
    { author } says:
    <blockquote>
      { body }
    </blockquote>
    <CommentVote id={id} />
  </p>
;


const PostView = ({ post, comments }) =>
  <article>
    <section>
      <h2>{ post.title }</h2>
      { post.body }
      <PostVote id={post.id} />
    </section>
    <section>
      { comments && comments.map(c => <Comment key={c.id} {...c} />) }
    </section>
    <AddComment />
  </article>
;


export default PostView;
