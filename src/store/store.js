import { configureStore } from "@reduxjs/toolkit";
import wordsReducer from "./words/wordsSlice";

const store = configureStore({
  reducer: {
    words: wordsReducer,
  },
});

export default store;
