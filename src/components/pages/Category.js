import React from 'react';
import { Link } from 'react-router-dom';

import Page from './Page';

import Actions from '../Actions';
import CategoryPostsView from '../CategoryPostsView';


const Category = (props) =>
  <Page>
    <Link to="/">&#8592; Home</Link>
    <CategoryPostsView categoryPath={props.match.params.path} />
    <Actions />
  </Page>
;


export default Category;
