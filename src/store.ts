import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducer from "reducers";

const initialState: any = {};

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...[thunk]))
);

export default store;
