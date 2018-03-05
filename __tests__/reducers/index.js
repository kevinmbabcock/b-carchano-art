import worksListReducer from './../../src/reducers/worksListReducer';
import constants from './../../src/constants';

describe('postListReducer', () => {

  let action;
  const sampleWork = {
    title: 'work1',
    medium: 'ink',
    description: 'this is the description for work1',
    height: 18,
    width: 30,
    price: 100
  };

  test('Should return default state if no action type is recognized', () => {
    expect(postListReducer({}, { type: null })).toEqual({});
  });
})
