import React, { Component } from 'react';
import axios from 'axios';
import SearchForm from './components/SearchForm.js';
import Navigation from './components/Navigation.js';
import PhotoGallery from './components/PhotoGallery.js';
import apiKey from './config.js';


class App extends Component {
  state = {
    photos: []
  }
  
  componentDidMount() {
      axios.get("https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=" + apiKey + "&format=json&nojsoncallback=1&tags=cat")
        .then(response => {
          this.setState({ photos: response.data.photos.photo
          });
        })
        .catch(error => {
          console.log('Error fetching and parsing data', error);
        })
  };
  
  render() {
    return (
      <div>
        <SearchForm />
        <Navigation />
        <PhotoGallery photos={this.state.photos}/>
      </div>
    );
  }
}

export default App;
