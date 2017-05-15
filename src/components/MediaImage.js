import React from "react";
import '../styles/MediaImage.css';
import { injectState } from "freactal";

const MediaImage = ({state}) => {
  const {selectedItem = {}, images = {}} = state;
  const { images:_images = [], title="" } = selectedItem;
  const primaryImage = images[_images[0]] || "";

  if(!primaryImage) {
    return (<div/>);
  }

  return (
    <div className="media-image-section padded-section">
      <img className="media-image"
        alt={title}
        src={primaryImage}/>
    </div>
  );
}

export default injectState(MediaImage);
