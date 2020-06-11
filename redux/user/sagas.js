import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { CREATE_USER_START } from "./action.types";

export function* createUserStart() {
  yield takeEvery(CREATE_USER_START, createUser);
}
