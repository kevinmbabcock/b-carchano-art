import constants from './../constants';
const { initialState, types } = constants;

export default (state = initialState.masterInquiriesList, action) => {

  const { firstName, lastName, email, subject, message } = action;

  switch (action.type) {


    // default:
    //   return state;
  }
};
