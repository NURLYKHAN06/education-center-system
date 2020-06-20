const initialState = {
  pageLoader: false,
  loginBtnLoader: false,
};

export const SET_PAGE_LOADER = "SET_PAGE_LOADER";
export const SET_LOGIN_BTN_LOADER = "SET_LOGIN_BTN_LOADER";

export const setPageLoader = (payload) => ({
  type: SET_PAGE_LOADER,
  payload,
});

export const setLoginBtnLoader = (payload) => ({
  type: SET_LOGIN_BTN_LOADER,
  payload,
});

export function loaderReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PAGE_LOADER:
      return {
        ...state,
        pageLoader: action.payload,
      };
    case SET_LOGIN_BTN_LOADER:
      return {
        ...state,
        loginBtnLoader: action.payload,
      };
    default:
      return state;
  }
}
