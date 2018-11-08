import React from 'react';

// Display an individual photo 
const Photo = (props) => (
  <li>
    <img src={props.url} alt="" />
  </li>
)

export default Photo;