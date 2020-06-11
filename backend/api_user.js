import { auth } from "./config";

export function createUser({ email, password, ...userData }) {
  return auth
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      console.log(userData);
    })
    .catch(function (error) {
      console.log(error);
    });
}
