import React from "react";
import '../styles/ItemDetails.css';
import { injectState } from "freactal";

const ItemDetails = ({state}) => {
  const { selectedItem = {} } = state;
  const { description = "" } = selectedItem;
  if(!description) {
    return (<div/>);
  }
  
  return (
    <div>
      <div className="item-details padded-section">
          <div className="item-description-heading heading">Item details:</div>
          <p className="item-description">
            {description}
          </p>
      </div>
      {/* Divider */}
      <div className="horizontal-divider"></div>
    </div>
  );
}

export default injectState(ItemDetails);
