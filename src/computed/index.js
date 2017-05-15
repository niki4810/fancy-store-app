export const selectedItem = ({selected = {}, items = {}}) => {
  const {item = ""} = selected;
  return items[item] || {};
};

export const groups = ({siblingItems =  {}, selectedItem = {}}) => {
  const {id = ""} = selectedItem;
  const currentGroups = Object.values(siblingItems) || [];
  const transformedGroups = currentGroups.map((group = {}) => {
    return Object.assign({}, group, {
      selected: group.id === id
    });
  });
  return transformedGroups;
};
