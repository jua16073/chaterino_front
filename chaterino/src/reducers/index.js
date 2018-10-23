import {combineReducers} from 'redux';

import chats from './chats';
import comments from './comments';
import users from './users';

const reducer = combineReducers({
  chats,
  comments,
  users
});

export default reducer;