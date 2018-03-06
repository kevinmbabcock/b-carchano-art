import * as types from './../constants/ActionTypes';
import v4 from 'uuid/v4';

export const addWork = (title, medium, description, height, width, price, id) => ({
  type: types.ADD_WORK,
  title,
  medium,
  description,
  height,
  width,
  price,
  id
});
