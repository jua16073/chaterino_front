import {takeLatest} from 'redux-saga/effects';
import ChatSaga from './chat';
import UsuarioSaga from './usuario';
import CommentSaga from './comments';

//superagent? libreria de js

export default function* root() {
  yield takeLatest(UsuarioSaga);
  yield takeLatest(ChatSaga);
  yield takeLatest(CommentSaga);
}