import React from 'react';


const Comment = ({ body, author }) =>
  <p>
    { author } says:
    <blockquote>
      { body }
    </blockquote>
  </p>
;


const PostView = ({ post, comments }) =>
  <article>
    <section>
      <h2>{ post.title }</h2>
        { post.body }
    </section>
    <section>
      { comments && comments.map(c => <Comment key={c.id} {...c} />) }
    </section>
  </article>
;


export default PostView;