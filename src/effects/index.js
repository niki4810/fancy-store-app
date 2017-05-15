import { softUpdate } from "freactal";
const wrapWithPending = cb =>
  (effects, ...args) => effects.setLoadingState("LOADING")
  .then(() => cb(...args));

const delay = ms => val => new Promise(resolve => setTimeout(() => resolve(val), ms));

export const getBinId = (itemId) => itemId === "1234" ? "nuxodel" : "pozidod";

// get the delay param from url
// mainly added for testing purpose
export const getDelayFromQueryString = () => {
  const urlParams = new URLSearchParams(window.location.search);
  return parseInt(urlParams.get("delay")) || 0;
}


export const updateSelectedItem= softUpdate((state, itemId) => {
  const {selected = {}} = state;
  const transformedSelected = Object.assign({}, selected, {
    item: itemId
  });
  return Object.assign({}, state, {
    selected: transformedSelected
  });
});

export const setLoadingState = softUpdate((state, status) => {
  const {selected = {}} = state;
  const transformedSelected = Object.assign({}, selected, { status });
  return Object.assign({}, state, {
    selected: transformedSelected
  });
});

// TODO: Research if this is the correct way to merge state.
const mergeStates = (state, newState) => {
  const selected = Object.assign({}, state.selected, newState.selected);
  const items = Object.assign({}, state.items, newState.items);
  const images = Object.assign({}, state.images, newState.images);
  return Object.assign({}, state, {
    selected,
    items,
    images,
    siblingItems: newState.siblingItems
  });
};

export const getItemDetails = wrapWithPending((itemId) =>
  fetch(`http://output.jsbin.com/${getBinId(itemId)}.json`)
  .then(result => result.json())
  .then(delay(getDelayFromQueryString()))
  .then(data => state => mergeStates(state, data))
);

export const addItemToBag = softUpdate(state => ({ itemsInBag: state.itemsInBag + 1}));
