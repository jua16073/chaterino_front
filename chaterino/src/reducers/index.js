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

export const getUsers = (state) => fromUsers.getUsers(state.users);

export const getUser = (state, id) => fromUsers.getUser(state.users, id);

export const getChats = (state) => fromChats.getChats(state.chats);

export const getChat = (state, id) => fromChats.getChat(state.chats, id);

export const getComments = (state) => fromComments.getComments(state.comments);

export const getComment = (state, id) => fromComments.getComment(state.comments, id);