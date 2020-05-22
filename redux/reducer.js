import { createStore } from "redux";
import { createWrapper } from "next-redux-wrapper";

export let initState = {
  token: "",
  settings: {
    url: "",
    user: "",
    accessKey: "",
  },
  credentials: {
    sessionName: "",
    userId: "",
  },
  userInfo: "",
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "SET_SETTINGS":
      return {
        ...state,
        settings: {
          url: action.payload.url,
          user: action.payload.user,
          accessKey: action.payload.accessKey,
        },
      };
    case "SET_CREDENTIAL":
      return {
        ...state,
        credentials: action.payload,
      };
    case "SET_USERINFO":
      return {
        ...state,
        userInfo: action.payload,
      };
    default:
      return state;
  }
};

const makeStore = (context) => createStore(reducer);
export const wrapper = createWrapper(makeStore, { debug: false });
