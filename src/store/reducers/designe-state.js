import { SETCOLOR, SETPERSONNAME, SETIMAGEURL } from "../actions/actions-type";

const initialState = {
  imageUrl: "./img/chevrole.png",
  color: "gold",
  personName: "Person person",
};

export const designeReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case SETIMAGEURL:
      return { ...state, imageUrl: actions.payload };
    case SETCOLOR:
      return { ...state, color: actions.payload };
    case SETPERSONNAME:
      return { ...state, personName: actions.payload };
    default:
      return state;
  }
};
