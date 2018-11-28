import {combineReducers} from 'redux';
import * as types from '../types';

const user= (state = null, action) => {
  switch (action.type) {
    case types.USER_VERIFIED_DONE:{
      return action.payload.result;
    }

    default:
      return state;
  }
}


const users = combineReducers({
  user,
});

export default users;

export const getToken = (state) => state.user;