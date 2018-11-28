import {combineReducers} from 'redux';
import * as types from '../types';

const byId = (state = {}, action) => {
  switch(action.type){
    case types.CHAT_CREATED:{
      const {id} = action.payload;
      return {
        ...state,
        [id]:{
          ...action.payload,
          comments: [],
        }
      }
    }

    case types.CHAT_CREATED_DONE:{
      const {nId, oId} = action.payload;
      let newState = {...state};
      newState = delete newState[oId];
      return{
        ...newState,
        [nId]: {
          ...action.payload,
          comments:[]
        }
      }
    }
    
      case types.CHAT_CREATED_FAILED:{
        const {oId} = action.payload;
        let newState = {...state};
        newState = delete newState[oId];
        return {
          newState,
        }
      }

    case types.COMMENTED:{
      const {idChat} = action.payload;
      const chat = state[idChat];
      const {comments} = chat;
      const {id} = action.payload;
      return {
        ...state,
        [idChat]:{
          ...chat,
          comments:[
            ...comments,
            id,
          ]
        }
      }
    }

    case types.COMMENTED_DONE:{
      const {oId, idChat, nId} = action.payload;
      const chat = state[idChat];
      const {comments} = chat;
      const newComments = delete comments[oId]
      return {
        ...state,
        [idChat]:{
          ...chat,
          comments:[
            ...newComments,
            nId
          ]
        }
      }
    };

    case types.COMMENTED_DONE:{
      const {oId, idChat} = action.payload;
      const chat = state[idChat];
      const {comments} = chat;
      const newComments = delete comments[oId]
      return {
        ...state,
        [idChat]:{
          ...chat,
          comments:[
            ...newComments,
          ]
        }
      }
    };

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

    case types.CHAT_CREATED_DONE:{
      const {oId, nId} = action.payload;
      let newState = [...state];
      newState = delete newState[oId];
      return [
        ...newState,
        [nId]
      ]
    }

    case types.CHAT_CREATED_FAILED:{
      const {oId} = action.payload;
      let newState = [...state];
      newState = delete newState[oId];
      return[
        ...newState,
      ]
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