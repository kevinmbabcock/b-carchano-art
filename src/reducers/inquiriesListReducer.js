import constants from './../constants';
const { initialState, types } = constants;

export default (state = initialState.inquiriesList, action) => {

  const { firstName, lastName, email, subject, message, id } = action;

  switch (action.type) {

    case types.ADD_INQUIRY: {
      const newInquiryListEntry = Object.assign({}, state, {
        [id] : {
          firstName: firstName,
          lastName: lastName,
          email: email,
          subject: subject,
          message: message,
          newInquiry: true,
          created: new Date().toString(),
          id: id
        }
      });
      return newInquiryListEntry;
    }


    default:
      return state;
  }
};
