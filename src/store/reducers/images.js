import { GETIMAGES } from "../actions/actions-type";

const initialState = {
  images: [],
};

export const imagesReduser = (state = initialState, actions) => {
  switch (actions.type) {
    case GETIMAGES:
      return { ...state, images: actions.payload };
    default:
      return state;
  }
};
