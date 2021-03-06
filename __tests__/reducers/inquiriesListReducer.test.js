import inquiriesListReducer from './../../src/reducers/inquiriesListReducer';
import constants from './../../src/constants';
const { initialState, types } = constants;
import * as actions from './../../src/actions';

describe('inquiriesListReducer', () => {

  let action;
  const sampleInquiry = {
    firstName: 'Kevin',
    lastName: 'Babcock',
    email: 'babsy10@gmail.com',
    subject: 'test',
    message: 'this is Kevin\'s inquiry',
    newInquiry: true,
    read: false,
    created: new Date().toString(),
    id: 1
  };

  test('Should return default state if no action type is recognized', () => {
    expect(inquiriesListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfuly add new inquiry to masterInquiryList', () =>{
    const { firstName, lastName, email, subject, message, id, created, read } = sampleInquiry;
    action = {
      type: types.ADD_INQUIRY,
      firstName: firstName,
      lastName: lastName,
      email: email,
      subject: subject,
      message: message,
      id: id
    };
    expect(inquiriesListReducer({}, action)).toEqual({
      [id] : {
        firstName: firstName,
        lastName: lastName,
        email: email,
        subject: subject,
        message: message,
        newInquiry: true,
        read: read,
        created: created,
        id: id
      }
    })
  });

  test('Should delete inquiry from masterInquiryList', () => {
    const { id } = sampleInquiry;
    action = {
      type: types.DELETE_INQUIRY,
      id: id
    };
    expect(inquiriesListReducer(sampleInquiry, action)).toEqual({})
  });

  // test('Should mark inquiry as read', () => {
  //   const { firstName, lastName, email, subject, message, created, id } = sampleInquiry;
  //   action = {
  //     type: types.MARK_INQUIRY_AS_READ,
  //     id: id
  //   };
  //   expect(inquiriesListReducer(sampleInquiry, action)).toEqual({
  //     [id] : {
  //       firstName: firstName,
  //       lastName: lastName,
  //       email: email,
  //       subject: subject,
  //       message: message,
  //       newInquiry: true,
  //       read: true,
  //       created: created,
  //       id: id
  //     }
  //   })
  // })
})
