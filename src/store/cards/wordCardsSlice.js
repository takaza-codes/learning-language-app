import { createSlice } from "@reduxjs/toolkit";

const wordCardsSlice = createSlice({
  name: "wordCards",
  initialState: {
    cardIndex: 0,
    direction: 1,
    wordsLearned: 0,
    revealedIds: [],
  },
  reducers: {
    setCardIndex(state, action) {
      state.cardIndex = action.payload;
    },
    setDirection(state, action) {
      state.direction = action.payload;
    },
    resetSession(state) {
      state.cardIndex = 0;
      state.direction = 1;
      state.wordsLearned = 0;
      state.revealedIds = [];
    },
    revealWord(state, action) {
      const id = action.payload;
      if (!state.revealedIds.includes(id)) {
        state.wordsLearned += 1;
        state.revealedIds.push(id);
      }
    },
  },
});

export const { setCardIndex, setDirection, resetSession, revealWord } =
  wordCardsSlice.actions;

export default wordCardsSlice.reducer;
