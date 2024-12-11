import { combineReducers, configureStore } from "@reduxjs/toolkit";
import useReducer from "../Slices/userSlice";

const reducer = combineReducers({
  userInfo: useReducer,
});

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
