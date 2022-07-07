import { SET_USER } from "../types";

export const initialState = {
  user: null,
};

export const userReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case SET_USER:
      return {
        ...state,
        user: actions.payload,
      };

    default:
      return state;
  }
};
