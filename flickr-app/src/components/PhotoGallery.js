import React from 'react';
import Photo from './Photo.js';

// Display a grid of photos passed in from Container component
const PhotoGallery = (props) => {
  // If currently loading, don't display the gallery yet
  if (props.loading == "true") {
    return (
      <h2>{props.title}</h2>
    )
  } else if (props.photos.length > 0) {
    // If there are results, loop through them using .map() and display each
    // in a Photo component
    return (
      <React.Fragment>
        <h2>{props.title}</h2>
        <ul>
          {props.photos.map( photo => (
            <Photo 
              url={"https://farm" + photo.farm + ".staticflickr.com/" + photo.server
              + "/" + photo.id + "_" + photo.secret + ".jpg"}
              key={photo.id}
            />)
          )}
        </ul>
      </React.Fragment>
    ) 
  } else {
      // if no results, display a No Results Found message
      return (
        <div className="not-found">
          <h3>No Results Found</h3>
          <p>You search did not return any results. Please try again.</p>
        </div>
      )
  }
}

export default PhotoGallery;
