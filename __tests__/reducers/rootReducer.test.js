import rootReducer from './../../src/reducers/';
import worksListReducer from './../../src/reducers/worksListReducer';
import inquiriesListReducer from './../../src/reducers/inquiriesListReducer';
import constants from "./../../src/constants";
const { initialState } = constants;
import { createStore } from 'redux';


describe('rootReducer', () => {
    const store = createStore(rootReducer, initialState);

  it('Should accept and return initial state.', () => {
    expect(rootReducer(initialState, { type: null })).toEqual(initialState);
  });

  it('Should contain logic from both reducers.', () => {
    expect(store.getState().worksList).toEqual(worksListReducer(undefined, { type: null }));
    expect(store.getState().inquiriesList).toEqual(inquiriesListReducer(undefined, { type: null }));
  });
})
