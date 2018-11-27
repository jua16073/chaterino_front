import {call, put, takeEvery, takeLatest, take, fork} from 'redux-saga/effects';
import {request, reject} from 'superagent';
import * as Types from '../types';

function addComment (action) {
  const url = 'POST http://127.0.0.1:8000/api/users/${action.name}';
  return request
    .get(url)
    .then((data) => {
      return JSON.parse(data.text)
    });
}

function* callAddComment (action){
  try{
    const result = yield call (addComment, action);
    console.log(result);
    yield put ({type: 'ADD_USER_DONE'}, result);
  }
  catch(err){
    yield call(reject);
  }
}

function* addCommentSaga (){
  yield* takeEvery(Types.COMMENTED, callAddComment);
}

export default function* root(){
  yield[
    fork(addCommentSaga),
  ]
}