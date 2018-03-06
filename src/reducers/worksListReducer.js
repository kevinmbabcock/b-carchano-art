import constants from './../constants';
const { initialState, types } = constants;

export default (state = initialState.masterWorksList, action) => {

  const { title, medium, description, height, width, price, id } = action;

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

      default:
        return state;
  }
};
