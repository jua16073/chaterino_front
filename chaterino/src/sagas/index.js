import {takeLatest} from 'redux-saga/effects';
import ChatSaga from './chat';
import UsuarioSaga from './usuario';
import CommentSaga from './comments';


export default function* root() {
  yield takeLatest(ChatSaga);
  yield takeLatest(UsuarioSaga); 
  yield takeLatest(CommentSaga);
}