import React from "react";
import '../styles/Bag.css';
import { injectState } from "freactal";

const Bag = ({state}) => (
    <div className="bag-container">
      <div className="bag display-inline-block"></div>
      <div className="bag-count display-inline-block">
        {state.itemsInBag || 0}
      </div>
    </div>
);

export default injectState(Bag);
