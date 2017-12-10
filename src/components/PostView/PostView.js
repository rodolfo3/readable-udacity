import React from 'react';
import { Link } from 'react-router-dom';

import AddComment from './AddComment';
import Comment from './Comment';
import Vote from '../Vote';


const PostVote = (props) => <Vote kind='posts' {...props} />;


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


const sortComments = (comments, sortField = 'voteScore') =>
  comments.sort((a, b) => a[sortField] - b[sortField]).reverse();
;


const formatDateTime = Intl.DateTimeFormat({}, {hour: 'numeric', minute: 'numeric', year: 'numeric', month: 'numeric', day: 'numeric'}).format;


const PostView = ({ post, comments, deleteComment, deletePost }) =>
  <article>
    <section>
      <h2>{ post.title }</h2>
      <div>
        by { post.author }
        <br/>
        at { formatDateTime(post.timestamp) }
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
      { comments && sortComments(comments).map(c => <Comment key={c.id} deleteComment={deleteComment} {...c} />) }
    </section>
    <AddComment />
  </article>
;


export default PostView;
