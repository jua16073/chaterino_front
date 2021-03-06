import {call, put, takeEvery, fork} from 'redux-saga/effects';
import * as Types from '../types';
import * as actions from '../actions';

function addChat (titulo, key) {
  const {token} = key;
  const url = 'http://127.0.0.1:8000/api/chats/';
  let dataTopico = {topico:titulo}
  let dataToken =  "JWT "+token;
  console.log("el token es: ");
  console.log(token);
  let fetchData = {
    method:'POST',
    body:JSON.stringify(dataTopico),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': dataToken,
    },
  }
  let pls
    pls =  fetch(url, fetchData)
    .then((data) => data.json())
    .catch((error) => {console.log(error)});
  return pls;
}

function* callAddChat (action){
  const {id,token, title} = action.payload;
  const oId = id;
  try{
    const result = yield call (addChat, title, token);
    console.log("El resultado es: ");
    console.log(result);
    const {id, topico, uri} = result;
    console.log(id);
    console.log(topico);
    console.log(uri);
    yield put (actions.addChatState(id,oId,topico,token, uri));
    console.log("chat agregado (?)");
  }
  catch(err){
    console.log("fashó nuevo shat");
    console.log(err);
    yield put(actions.removeChatState(oId));
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