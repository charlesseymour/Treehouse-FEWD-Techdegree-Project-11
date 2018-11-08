import React, { Component } from 'react';
import SearchForm from './components/SearchForm.js';
import Navigation from './components/Navigation.js';
import Container from './components/Container.js';
import NotFound from './components/NotFound.js';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

// Main app component
class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <SearchForm />
          <Navigation />
          <Switch>
            // Redirect home page to search for cat images
            <Route exact path="/" render={() => <Redirect to="/search/cat" /> } />
            // Pass the tag url parameter to Container component to search Flickr
            <Route path="/search/:tag" render={(props) => <Container {...props} /> } />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
