import {combineReducers} from 'redux';
import * as types from '../types';


const byId = (state = {}, action) => {
  switch(action.type){
    case types.COMMENTED:{
      const {id} = action.payload;
      return {
        ...state,
        [id]: action.payload
      };
    }

    default:
      return state;


  }
}

const comments = combineReducers({
  byId,
});

export default comments;

export const getComment = (state, id) => state.byId[id];
