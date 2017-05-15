import React from "react";
import '../styles/ItemTitle.css';
import { injectState } from "freactal";

const ItemTitle = ({state}) => {
  const {selectedItem = {}} = state;
  const { title } = selectedItem;
  return (
    <div className="item-title padded-section">
      {title}
    </div>
  );
}

export default injectState(ItemTitle);
