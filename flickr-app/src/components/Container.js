import React, { Component } from 'react';
import PhotoGallery from './PhotoGallery.js';
import apiKey from '../config.js';
import axios from 'axios';

// Container component is responsible for fetching photos matching the 
// tag provided by the App component, and passing the search results
// to the PhotoGallery component for display.

export default class Container extends Component {
  
  constructor(props) {
    super(props);
    // The component's state stores the photo search results
    // and tracks whether or not the component is loading
    this.state = {
      photos: [],
      loading: true
    }
  }
  
// A function that takes a tag and retrieves all photos with that tag.
  fetchPhotos(tag) {
    let url = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=" + apiKey + "&format=json&nojsoncallback=1&tags=" + tag;
    axios.get(url)
      .then(response => {
        this.setState({photos: response.data.photos.photo, loading: false});
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      })
  }

// Search photos when the component first mounts
  componentDidMount() {
    this.fetchPhotos(this.props.match.params.tag);
  }
  
// When the component updates, check the url tag and if different
// than the previous one, run fetchPhotos again
  componentDidUpdate(prevProps) {
    if (this.props.match.params.tag !== prevProps.match.params.tag) {
      this.setState({loading: true});
      this.fetchPhotos(this.props.match.params.tag);
      document.getElementsByClassName("search-form")[0].reset();
    }
  }
  
// Pass the fetchPhotos results to PhotoGallery for display
  render() {
    return (
      <div className="photo-container container">
        { 
          (this.state.loading)
          ? <PhotoGallery title="Loading..." loading="true"/>
          : <PhotoGallery photos={this.state.photos} title={`${this.props.match.params.tag} images`} />
        }
      </div>
    );
  }
  
}
