import React from 'react';
import { Link } from 'react-router-dom';

import CategoryList from '../CategoryList';
import PostList from '../PostList';


const Home = () =>
  <div>
    <section>
      <h2>Categories</h2>
      <CategoryList />
    </section>
    <section>
      <h2>Posts</h2>
      <PostList />
    </section>
    <section>
      <Link to="/posts/new">
        Add new post
      </Link>
    </section>
  </div>
;


export default Home;
