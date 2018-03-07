import constants from './../constants';
const { initialState, types } = constants;

export default (state = initialState.masterWorksList, action) => {

  const { title, medium, description, height, width, price, id, forSale, featured } = action;

  switch (action.type) {

    case types.ADD_WORK: {
      const newWorksListEntry = Object.assign({}, state, {
        [id]: {
          title: title,
          medium: medium,
          description: description,
          height: height,
          width: width,
          price: price,
          forSale: true,
          featured: false,
          id: id
        }
      });
      return newWorksListEntry;
    }

    case types.UPDATE_WORK: {
      const newWorksListEntry = Object.assign({}, state, {
        [id] : {
          title: title,
          medium: medium,
          description: description,
          height: height,
          width: width,
          price: price,
          forSale: forSale,
          featured: featured,
          id: id
        }
      });
      return newWorksListEntry;
    }

    case types.DELETE_WORK: {
      const newStateList = {};
      Object.keys(state).map(workId => {
        if (workId != id) {
          Object.assign(newStateList, state[id])
        }
      })
      return newStateList;
    }

    default:
      return state;
  }
};
