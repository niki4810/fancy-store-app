import React from "react";
import '../styles/ItemActions.css';
import { injectState } from "freactal";

const Groups = ({groups = {}, onClick = () => {} }) => {
  const _children = groups.map((group = {}) => {
    const {selected} = group;
    const selectedClass = selected ? ' selected' : '';
    const _classes = `item-tile display-inline-block${selectedClass}`;
    return (
      <div key={group.id} className={_classes} onClick={() => {
          onClick(group);
        }}>
        <img src={group.image} alt={name}/>
      </div>
    );
  });

 return (
   <div className="other-items display-inline-block">
     <div className="other-items-heading heading display-inline-block">Select an item:</div>
     {_children}
   </div>
 );
};

const ItemActions = ({state, effects}) => {
  const {groups = [], selectedItem = {}, items} = state;
  const {id = ""} = selectedItem;
  if(!id) {
    return (<div/>)
  }
  return (
    <div className="actions-section padded-section">
      <Groups
        groups={groups}
        selectedItemId={id}
        onClick={(group) => {
          const {id = ""} = group;
          const requestingProduct = items[id];
          if(requestingProduct && requestingProduct.status === "FETCHED") {
            effects.updateSelectedItem(id);
          } else {
            effects.getItemDetails(id);
          }
        }}/>
      <div className="display-inline-block vertical-divider"> </div>
      <button
        className="add-to-bag-button display-inline-block"
        onClick={() => {effects.addItemToBag()}}
        >
        Add to Bag
      </button>
    </div>
  );
}



export default injectState(ItemActions);
