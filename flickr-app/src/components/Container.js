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
  
  fetchPhotos(tag) {
    let url = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=" + apiKey + "&format=json&nojsoncallback=1&tags=" + tag;
    axios.get(url)
      .then(response => {
        this.setState({photos: response.data.photos.photo});
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      })
  }
  
  componentDidMount() {
    this.fetchPhotos(this.props.match.params.tag);
  }
  
  componentDidUpdate(prevProps) {
    if (this.props.match.params.tag !== prevProps.match.params.tag) {
      this.fetchPhotos(this.props.match.params.tag);
    }
  }
  
  render() {
    return (
      <PhotoGallery photos={this.state.photos} title={this.props.match.params.tag.substring(1)}/>
    );
  }
}
