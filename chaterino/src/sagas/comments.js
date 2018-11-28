import {call, put, takeEvery, takeLatest, take, fork} from 'redux-saga/effects';
import * as types from '../types';
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

function* callAddComment (action){
  const {id,token, title} = action.payload;
  const oId = id;
  try{
    const result = yield call (addChat, title, token);
    console.log(result);
//Sacar atributos

    //yield put (actions.commentToState(oId,nId,idChat,body));
    console.log("comment agregado (?)");
  }
  catch(err){
    console.log("fashó nuevo comment");
    console.log(err);
    yield put(actions.failedCommentToState(oId));
  }
}

function* addCommentSaga (){
  console.log("AddCommentSaga");
  yield takeEvery(types.COMMENTED, callAddComment);
}
export default function* root(){
  yield[
    fork(addCommentSaga),
  ]
}