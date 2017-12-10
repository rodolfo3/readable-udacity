import React from 'react';

import Page from './Page';

import Actions from '../Actions';
import CategoryPostsView from '../CategoryPostsView';


const Category = (props) =>
  <Page>
    <CategoryPostsView categoryPath={props.match.params.path} />
    <Actions />
  </Page>
;


export default Category;
