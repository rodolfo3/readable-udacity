import React from 'react';
import serializeForm from 'form-serialize';


import './PostForm.css';


const PostForm = ({ categories, post, submitForm }) => {
  const innerSubmitForm = (ev) => {
    submitForm(serializeForm(ev.target, { hash: true }));
    ev.preventDefault();
  }

  return (
    <form onSubmit={innerSubmitForm} className="post-form">
      { post.id && <input className="post-form-field" type="hidden" name="id" value={post.id} /> }

      <label className="post-form-label">
        Title
        <input className="post-form-field" type="text" name="title" defaultValue={post.title} required />
      </label>

      <label className="post-form-label">
        Author
        <input className="post-form-field" type="text" name="author" defaultValue={post.author} required />
      </label>

      <label className="post-form-label">
        Category
        <select className="post-form-field" name="category" defaultValue={post.category}>
          { categories && categories.map(c => <option key={c.path} value={c.path}>{c.name}</option>) }
        </select>
      </label>

      <label className="post-form-label">
        Post body
        <textarea className="post-form-field" name="body" defaultValue={post.body} required></textarea>
      </label>

      <input type="submit" />
    </form>
  );
};


export default PostForm;
