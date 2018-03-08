import { combineReducers } from 'redux';
import worksListReducer from './worksListReducer';
import inquiriesListReducer from './inquiriesListReducer';


const rootReducer = combineReducers({
  masterWorksList: worksListReducer,
  masterInquiriesList: inquiriesListReducer
});

export default rootReducer;
