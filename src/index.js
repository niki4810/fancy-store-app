import React from 'react';
import ReactDOM from 'react-dom';
import { provideState } from "freactal";

/* Effects */
import * as effects from "./effects";

/* Compute props */
import * as computed from "./computed";

/* Root component */
import MainContainer from './components/MainContainer';

/* Misc */

// make the initial fetch call to load product data.
fetch(`http://output.jsbin.com/${effects.getBinId('1234')}.json`)
.then(result => result.json())
.then((data = {
  selected: {}
}) => {

  const wrapComponentWithState = provideState({
    effects,
    computed,
    initialState: () => {
      return {
        itemsInBag: 0,
        ...data
      };
    }
  });

  const StatefulContainer = wrapComponentWithState(MainContainer);
  ReactDOM.render(<StatefulContainer />, document.getElementById('root'));
})
