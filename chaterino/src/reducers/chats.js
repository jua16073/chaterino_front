import {combineReducers} from 'redux';
import * as types from '../types';

const byId = (state = {}, action) => {
  switch(action.type){

    case types.COMMENTED:{
      const {idChat} = action.payload;
      const chat = state[idChat];
      const {comments} = chat;
      const {id} = action.payload;
      return {
        ...state,
        [idChat]:{
          ...chat,
          comments:{
            ...comments,
            id,
          }
        }
      }
    }

    default:
      return state;
  }
}

const order = (state = [],action) => {
  switch(action.type){
    case types.CHAT_CREATED:{
      const {id} = action.payload;
      return[
        ...state,
        id
      ];
    }

    default:
      return state;
  }
}


const chats = combineReducers({
  byId,
  order
});

export default chats;

export const getChat = (state, id) => state.byId[id];

export const getChats = (state) => state.order.map (
  id => getChat(state, id),
);