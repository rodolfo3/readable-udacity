import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './App.css';
import Home from './pages/Home';
import Category from './pages/Category';
import Post from './pages/Post';
import CreatePost from './pages/CreatePost';

import PostFormEdit from './PostFormEdit';

import GenericNotFound from './GenericNotFound';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/categories/:path" component={Category} />

          <Route exact path="/posts/new" component={CreatePost} />
          <Route exact path="/posts/:id" component={Post} />
          <Route exact path="/posts/:id/edit" component={PostFormEdit} />
          <Route exact path='*' component={GenericNotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
