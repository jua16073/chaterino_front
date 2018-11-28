import * as types from '../types';

export const createUser = (
  id,
  nombre,
  correo,
  contrasena,
) => ({
  type: types.USER_CREATED,
  payload:{
    id,
    nombre,
    correo,
    contrasena,
  }
});

export const userCreated = (
) => ({
  type: types.ADD_USER_DONE,
  payload: {
  }
})

export const verifyUser = (
  nombre,
  contrasena
) => ({
  type: types.USER_VERIFIED,
  payload:{
    nombre,
    contrasena,
  }
});

export const userVerified = (
  token
) => ({
  type: types.USER_VERIFIED_DONE,
  payload:{
    token,
  }
}) 
///////////////////////////////////////////////////////////////////////
export const createChat = (
  id,
  token,
  title
) => ({
  type: types.CHAT_CREATED,
  payload: {
    id,
    token,
    title
  }
});

export const addChatState = (
  nId,
  oId,
  title,
  token,
  uri,
) => ({
  type: types.CHAT_CREATED_DONE,
  payload:{
    nId,
    oId,
    title,
    token,
    uri
  }
});

export  const removeChatState = (
  oId,
) => ({
  type: types.CHAT_CREATED_FAILED,
  payload:{
    oId,
  }
})

export const joinChat = (
  idUsuario,
  idChat,
) => ({
  type: types.CHAT_JOINED,
  payload:{
    idUsuario,
    idChat,
  }
});


/////////////////////////////////////////////////////////////////
export const comment = (
  id,
  idChat,
  body,
) => ({
  type: types.COMMENTED,
  payload: {
    id,
    idChat,
    body,
  }
});

export const commentToState = (
  oId, 
  nId,
  idChat,
  body,
) => ({
  type: types.COMMENTED_DONE,
  payload:{
    oId,
    nId,
    idChat,
    body
  }
})

export const failedCommentToState =(
  oId,
  idChat
) => ({
  type: types.COMMENTED_FAIL,
  payload:{
    oId,
    idChat
  }
})