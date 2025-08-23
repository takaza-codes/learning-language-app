import { configureStore } from "@reduxjs/toolkit";
import wordsReducer from "./words/wordsSlice";
import wordCardsReducer from "./cards/wordCardsSlice";

const store = configureStore({
  reducer: {
    words: wordsReducer,
    wordCards: wordCardsReducer,
  },
});

export default store;
