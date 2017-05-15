import React from "react";
import '../styles/Spinner.css';
import { injectState } from "freactal";

const Spinner = ({state}) => {
  const {selected = {}} = state;
  const {status = "FETCHED"} = selected;
  const _selectedClass = status === "FETCHED" ? " display-none" : "";
  const _classes = `loading-spinner-backdrop${_selectedClass}`;
  return (
    <div className={_classes}>
      <div className="loading-spinner"></div>
    </div>
  );
};

export default injectState(Spinner);
