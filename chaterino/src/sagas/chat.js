import {call, put, takeEvery, takeLatest, take, fork} from 'redux-saga/effects';
import {request, reject} from 'superagent';
import * as Types from '../types';

function addChat (action) {
  const url = 'http://127.0.0.1:8000/api/users/${action.name}';
  return request
    .get(url)
    .then((data) => {
      return JSON.parse(data.text)
    });
}

function* callAddChat (action){
  try{
    const result = yield call (addChat, action);
    console.log(result);
    yield put ({type: Types.CHAT_CREATED_DONE}, result);
  }
  catch(err){
    yield call(reject);
  }
}

function* addChatSaga (){
  yield* takeEvery(Types.CHAT_CREATED, callAddChat);
}

export default function* root(){
  yield[
    fork(addChatSaga),
  ]
}