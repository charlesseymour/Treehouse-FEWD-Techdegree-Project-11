import React, { Component } from 'react';
import SearchForm from './components/SearchForm.js';
import Navigation from './components/Navigation.js';
import Container from './components/Container.js';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';


class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <SearchForm />
          <Navigation />
          <Route exact path="/" render={() => <Redirect to="/:cat" /> } />
          <Route path="/:tag" render={(props) => <Container {...props} /> } />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
