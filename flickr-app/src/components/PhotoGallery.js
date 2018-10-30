import React from 'react';
import Photo from './Photo.js';

const PhotoGallery = (props) => (

  <div className="photo-container container">
    <h2>Results</h2>
    <ul>
      {props.photos.map( photo => (
        <Photo 
          url={"https://farm" + photo.farm + ".staticflickr.com/" + photo.server
          + "/" + photo.id + "_" + photo.secret + ".jpg"}
          key={photo.id}
        />
        )
      )}
      
      <li className="not-found">
        <h3>No Results Found</h3>
        <p>You search did not return any results. Please try again.</p>
      </li>
    </ul>
  </div>

)

export default PhotoGallery;
