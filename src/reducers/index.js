import { combineReducers } from 'redux';
import worksListReducer from './worksListReducer';


const rootReducer = combineReducers({
  worksList: worksListReducer,
});

export default rootReducer;
