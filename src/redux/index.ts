import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import reducer from "./reducers";

const bindMiddleware = (middleware: any) => {
  return applyMiddleware(...middleware);
};

export const initStore = () => {
  return createStore(reducer, bindMiddleware([thunkMiddleware]));
};
