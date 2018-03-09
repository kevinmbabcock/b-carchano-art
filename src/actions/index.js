import * as types from './../constants/ActionTypes';
import v4 from 'uuid/v4';

export const addWork = (title, medium, description, height, width, price ) => ({
  type: types.ADD_WORK,
  title,
  medium,
  description,
  height,
  width,
  price,
  id: v4()
});

export const updateWork = (title, medium, description, height, width, price, featured, forSale, id) => ({
  type: types.UPDATE_WORK,
  title,
  medium,
  description,
  height,
  width,
  price,
  featured,
  forSale,
  id
});

export const deleteWork = (id) => ({
  type: types.DELETE_WORK,
  id
});

export const addInquiry = (firstName, lastName, email, subject, message) => ({
  type: types.ADD_INQUIRY,
  firstName,
  lastName,
  email,
  subject,
  message,
  id: v4()
});

export const deleteInquiry = (id) => ({
  type: types.DELETE_INQUIRY,
  id
});
