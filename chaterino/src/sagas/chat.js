import {call, put, takeEvery, fork} from 'redux-saga/effects';
import * as Types from '../types';
import * as actions from '../actions';

function addChat (titulo, token) {
  const url = 'http://127.0.0.1:8000/api/chats/users/create/';
  let data = {topico:titulo, Authorization: "Token "+token}
  console.log(data);
  let fetchData = {
    method:'POST',
    body:JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  }
  let pls
    pls =  fetch(url, fetchData)
    .then((data) => data.json())
    .catch((error) => {console.log(error)});
  return pls;
}

//dueno, url , topico, id

function* callAddChat (action){
  const {titulo, token} = action.payload;
  try{
    const result = yield call (addChat, titulo, token);
    console.log(result);
    yield put (actions.userCreated());
    console.log("termino?");
  }
  catch(err){
    console.log("fashó");
    console.log(err);
  }
}

function* addChatSaga (){
  console.log("AddChatSaga");
  yield takeEvery(Types.CHAT_CREATED, callAddChat);
}

export default function* root(){
  yield[
    fork(addChatSaga),
  ]
}