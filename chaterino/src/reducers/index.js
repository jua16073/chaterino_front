import {combineReducers} from 'redux';

import chats, * as fromChats from './chats';
import comments, * as fromComments from './comments';
import users, * as fromUsers from './users';

const reducer = combineReducers({
  chats,
  comments,
  users
});

export default reducer;

export const getToken = (state) => fromUsers.getToken(state.users);

export const getChats = (state) => fromChats.getChats(state.chats);

export const getChat = (state, id) => fromChats.getChat(state.chats, id);

export const getComment = (state, id) => fromComments.getComment(state.comments, id);