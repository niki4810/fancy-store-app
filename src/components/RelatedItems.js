import React from "react";
import '../styles/RelatedItems.css';
import { provideState, injectState } from "freactal";

const wrapComponentWithState = provideState({
  initialState: () => {
    return {
      relatedItems: []
    };
  },
  effects: {
    getRelatedItems: effects => fetch("http://output.jsbin.com/runikig.json")
      .then(result => result.json())
      .then((data) => state => Object.assign({}, state, {
        relatedItems: data
      }))
  }
});

class RelateItemsList extends React.Component {
  componentDidMount() {
    this.props.effects.getRelatedItems();
  }

  render() {
    const { relatedItems = []} = this.props.state;
    if(relatedItems.length < 1) {
      return (<div/>);
    }

    const _children = relatedItems.map((relatedItem = {}) => {
      if(relatedItem) {
        const {
          title = "",
          image = "",
          id
        } = relatedItem;
        return (
          <div className="related-item-tile" key={id}>
            <img className="related-item-image" alt={title} src={image}/>
            <div className="related-item-title">{title}</div>
          </div>
        );
      }
    });

    return (
      <div className="related-items-section">
        {/* Divider */}
        <div className="horizontal-divider"></div>
        <div className="related-items-heading heading">Related items:</div>
        <div className="related-items-list">
          {_children}
        </div>
      </div>
    );
  }
}

const StatefulRelatedItemList = injectState(RelateItemsList);
const RelatedItems = () => (
  <StatefulRelatedItemList/>
);

export default wrapComponentWithState(RelatedItems);
