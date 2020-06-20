import { auth } from "./config";

export function createUser(email, password) {
  return auth.createUserWithEmailAndPassword(email, password);
}

export function saveCreatedUserToData(userData) {
  console.log(userData);
}
