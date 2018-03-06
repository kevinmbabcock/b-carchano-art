import worksListReducer from './../../src/reducers/worksListReducer';
import constants from './../../src/constants';
const { initialState, types } = constants;
import * as actions from './../../src/actions';

describe('worksListReducer', () => {

  let action;
  const sampleWork = {
    title: 'work1',
    medium: 'ink',
    description: 'this is the description for work1',
    height: 18,
    width: 30,
    price: 100,
    forSale: true,
    featured: false,
    id: 0
  };

  test('Should return default state if no action type is recognized', () => {
    expect(worksListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new work to masterWorksList', () => {
    const { title, medium, description, height, width, price, id } = sampleWork;
    action = {
      type: types.ADD_WORK,
      title: title,
      medium: medium,
      description: description,
      height: height,
      width: width,
      price: price,
      id: id
    };
    expect(worksListReducer({}, action)).toEqual({
      [id] : {
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
    })
  });

  test('Should update work in masterWorksList', () => {
    const { title, medium, description, height, width, price, id, forSale, featured } = sampleWork;
    action = {
      type: types.UPDATE_WORK,
      title: 'new title',
      medium: medium,
      description:  'new description',
      height: height,
      width: width,
      price: price,
      forSale: false,
      featured: featured,
      id: id
    };
    expect(worksListReducer({}, action)).toEqual({
      [id] : {
        title: 'new title',
        medium: medium,
        description: 'new description',
        height: height,
        width: width,
        price: price,
        forSale: false,
        featured: featured,
        id: id
      }
    })
  })
})
