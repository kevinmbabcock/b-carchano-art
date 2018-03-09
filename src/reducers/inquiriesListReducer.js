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
          read: false,
          created: new Date().toString(),
          id: id
        }
      });
      console.log('success');
      return newInquiryListEntry;
    }

    case types.DELETE_INQUIRY: {
      let newStateList = {};
      Object.keys(state).map(inquiryId => {
        if (inquiryId != id) {
          newStateList = Object.assign(newStateList, state[id]);
        };
      });
      return newStateList;
    }

    // case types.MARK_INQUIRY_AS_READ: {
    //   let newStateList = Object.assign({}, state);
    //   Object.keys(newStateList).map(inquiryId => {
    //     let inquiry = newStateList[inquiryId];
    //     if (inquiry.id === id) {
    //       inquiry.read = true
    //     }
    //   })
    //   return newStateList;
    // }


    default:
      return state;
  }
};
