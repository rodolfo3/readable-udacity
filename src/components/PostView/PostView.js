import React from 'react';
import { Link } from 'react-router-dom';

import EditComment from './EditComment';
import Comment from './Comment';

import './PostView.css';
import { PostVote, DeletePost, EditPost } from '../PostCommons';


const sortComments = (comments, sortField = 'voteScore') =>
  comments.sort((a, b) => a[sortField] - b[sortField]).reverse();
;


const formatDateTime = Intl.DateTimeFormat({}, {hour: 'numeric', minute: 'numeric', year: 'numeric', month: 'numeric', day: 'numeric'}).format;


const RenderError = ({ error }) => {
  if (error && error.response && error.response.status === 404) {
    return (
      <div>
        Not Found!
      </div>
    );
  }

  return (
    <div>
      Internal error:
      <pre>
        { JSON.stringify(error && error.message, null, '  ') };
      </pre>
      Please fill a bug report at
      <a href="https://github.com/rodolfo3/readable-udacity/issues">
        https://github.com/rodolfo3/readable-udacity/issues
      </a>
    </div>
  );
};

// TODO I need to handle `!post` here because the store is updated before the `history.push()` runs (inside deletePost). How is the right way to handle it?
const PostView = ({ post, error, comments, deleteComment, deletePost }) =>
  (error || !post)
  ? <RenderError error={error} />
  : (
    <article className="post-wrapper">
      <section>
        <h2 className="post-title">{ post.title }</h2>
        <div className="post-author">
          by { post.author }
        </div>
        <div className="post-time">
          at { formatDateTime(post.timestamp) }
        </div>
        <div className="post-comments-count">
          { post.commentCount ? `${post.commentCount} comments` : 'no comments yet' }
        </div>
        <article className="post-body">
          { post.body }
        </article>
        <PostVote id={post.id} voteScore={post.voteScore} />
        <div className="post-actions">
          <EditPost id={post.id} catgory={post.category} />
          <DeletePost id={post.id} action={deletePost} />
        </div>
      </section>
      <section>
        { comments && sortComments(comments).map(c => <Comment key={c.id} deleteComment={deleteComment} {...c} />) }
      </section>
      <EditComment />
    </article>
  )
;


export default PostView;
