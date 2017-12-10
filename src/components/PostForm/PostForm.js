import React from 'react';
import serializeForm from 'form-serialize';

const PostForm = ({ categories, post, submitForm }) => {
  const innerSubmitForm = (ev) => {
    submitForm(serializeForm(ev.target, { hash: true }));
    ev.preventDefault();
  }
  console.log(post);
  return (
    <form onSubmit={innerSubmitForm}>
      { post.id && <input type="hidden" name="id" value={post.id} /> }
      <label>
        Title
        <input type="text" name="title" defaultValue={post.title} required />
      </label>

      <label>
        Author
        <input type="text" name="author" defaultValue={post.author} required />
      </label>

      <label>
        Category
        <select name="category" defaultValue={post.category}>
          { categories && categories.map(c => <option key={c.path} value={c.path}>{c.name}</option>) }
        </select>
      </label>

      <label>
        Post body
        <textarea name="body" defaultValue={post.body} required></textarea>
      </label>

      <input type="submit" />
    </form>
  );

  return (
    <form onSubmit={innerSubmitForm}>
      <label>
        Title
        <input type="text" name="title" required />
      </label>

      <label>
        Author
        <input type="text" name="author" required />
      </label>

      <label>
        Category
        <select name="category">
          { categories && categories.map(c => <option key={c.path} value={c.path}>{c.name}</option>) }
        </select>
      </label>

      <label>
        Post body
        <textarea name="body" required></textarea>
      </label>

      <input type="submit" />
    </form>
  );
};


export default PostForm;
