import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './App.css';
import CategoryList from './CategoryList';
import GenericNotFound from './GenericNotFound';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={CategoryList} />
          <Route exact path='*' component={GenericNotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
