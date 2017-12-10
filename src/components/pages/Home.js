import React from 'react';

import Page from './Page';

import Actions from '../Actions';
import CategoryList from '../CategoryList';
import PostList from '../PostList';


const Home = () =>
  <Page>
    <section>
      <h2>Categories</h2>
      <CategoryList />
    </section>
    <section>
      <h2>Posts</h2>
      <PostList />
    </section>
    <Actions />
  </Page>
;


export default Home;
