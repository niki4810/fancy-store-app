/* Libraries */
import React, { Component } from 'react';
import { provideState, injectState } from "freactal";

/* Styles */
import '../styles/MainContainer.css';

/* Child components */
import Header from "./Header";
import Spinner from "./Spinner";
import Banner from "./Banner";
import ItemTitle from "./ItemTitle";
import MediaImage from "./MediaImage";
import ItemDetails from "./ItemDetails";
import ItemActions from "./ItemActions";
import RelatedItems from "./RelatedItems";

class MainContainer extends Component {
  render() {
    return (
      <div className="main-container background-section">
        <Header/>
        <Spinner/>
        <Banner/>
        <ItemTitle/>
        <MediaImage/>
        <ItemDetails/>
        <ItemActions/>
        <RelatedItems/>
      </div>
    );
  }
}

export default MainContainer;
