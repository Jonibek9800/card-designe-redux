import { combineReducers } from "redux";
import { designeReducer } from "./designe-state";
import { imagesReduser } from "./images";

export const reducer = combineReducers({
  images: imagesReduser,
  designe: designeReducer,
});
