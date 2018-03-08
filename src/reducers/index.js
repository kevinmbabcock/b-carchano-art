import { combineReducers } from 'redux';
import worksListReducer from './worksListReducer';
import inquiriesListReducer from './inquiriesListReducer';

const rootReducer = combineReducers({
  worksList: worksListReducer,
  inquiriesList: inquiriesListReducer
});

export default rootReducer;
