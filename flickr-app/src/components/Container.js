import React, { Component } from 'react';
import PhotoGallery from './PhotoGallery.js';
import apiKey from '../config.js';
import axios from 'axios';

export default class Container extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
    }
  }
  
  url = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=" + apiKey + "&format=json&nojsoncallback=1&tags=" + this.props.match.params.tag;
  
  componentDidMount() {
    axios.get(this.url)
      .then(response => {
        this.setState({photos: response.data.photos.photo});
        console.log("Photos = " + this.state.photos);
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      })
  }
  
  render() {
    return (
      <PhotoGallery photos={this.state.photos} />
    );
  }
}
