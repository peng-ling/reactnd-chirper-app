import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading';
import authedUsers from './authedUsers';
import users from './users';
import tweets from './tweets';

export default combineReducers({
  authedUsers,
  users,
  tweets,
  loadingBar: loadingBarReducer,
});
