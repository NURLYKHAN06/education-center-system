import { call, put, takeEvery, takeLatest, all } from "redux-saga/effects";
import { CREATE_USER_START } from "./action.types";
import { setLoginBtnLoader } from "../loader/reducer";
import { createUser, saveCreatedUserToData } from "../../backend/api_user";

function* createUser_({ payload }) {
  const { email, password } = payload;

  try {
    yield put(setLoginBtnLoader(true));
    const data = yield call(createUser, email, password);
    const someData = yield saveCreatedUserToData(data);
  } catch (error) {
    console.log(error);
  }
}

function* createUserStart_() {
  yield takeLatest(CREATE_USER_START, createUser_);
}

export function* userSagas() {
  yield all([call(createUserStart_)]);
}
