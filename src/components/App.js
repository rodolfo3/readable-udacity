import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './App.css';
import CategoryList from './CategoryList';
import CategoryPostsView from './CategoryPostsView';
import PostView from './PostView';
import PostForm from './PostForm';
import PostFormEdit from './PostFormEdit';

import GenericNotFound from './GenericNotFound';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={CategoryList} />
          <Route exact path="/categories/:path" component={CategoryPostsView} />
          <Route exact path="/posts/new" component={PostForm} />
          <Route exact path="/posts/:id" component={PostView} />
          <Route exact path="/posts/:id/edit" component={PostFormEdit} />
          <Route exact path='*' component={GenericNotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
