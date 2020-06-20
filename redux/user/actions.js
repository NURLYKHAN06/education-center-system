import { CREATE_USER_START } from "./action.types";

export const createUserStart = (user) => ({
  type: CREATE_USER_START,
  payload: user,
});
