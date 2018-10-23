import {combineReducers} from 'redux';
import * as types from '../types';

const byId = (state = {}, action) => {
  switch(action.type){
    case types.CHAT_CREATED:{
      const {id} = action.payload;
      return {
        ...state,
        [id]: action.payload,
      };
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