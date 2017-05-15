import React from "react";
import '../styles/Banner.css';
import { injectState } from "freactal";

const Banner = ({ state }) => {
  const {selectedItem = {}} = state;
  const { banner } = selectedItem;
  if(!banner) return (<div/>);
  return (
    <div className="banner">{banner}</div>
  );
}

export default injectState(Banner);
