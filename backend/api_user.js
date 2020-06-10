import { auth } from "./config";

export function createUser({ email, password }) {
  return auth
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      console.log("success");
    })
    .catch(function (error) {
      console.log(error);
    });
}
