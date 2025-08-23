import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { get, post, del } from "../../api/httpRequests";

const initialState = {
  words: [],
  loading: false,
  error: null,
};

export const fetchWordsAsync = createAsyncThunk(
  "words/fetchWordsAsync",
  async (_, thunkAPI) => {
    try {
      const response = await get("words");
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addWordAsync = createAsyncThunk(
  "words/addWordAsync",
  async (newWord, thunkAPI) => {
    try {
      const savedWord = await post("words", newWord);
      return savedWord;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteWordAsync = createAsyncThunk(
  "words/deleteWordAsync",
  async (id, thunkAPI) => {
    try {
      await del(`words/${id}`);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const wordsSlice = createSlice({
  name: "words",
  initialState,
  reducers: {
    setWords(state, action) {
      state.words = action.payload;
    },
    addWord(state, action) {
      state.words.push(action.payload);
    },
    editWord(state, action) {
      const updatedWord = action.payload;
      const index = state.words.findIndex((w) => w.id === updatedWord.id);
      if (index !== -1) {
        state.words[index] = updatedWord;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWordsAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWordsAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.words = action.payload;
      })
      .addCase(fetchWordsAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      })

      .addCase(addWordAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addWordAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.words.push(action.payload);
      })
      .addCase(addWordAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      })
      .addCase(deleteWordAsync.fulfilled, (state, action) => {
        state.words = state.words.filter((w) => w.id !== action.payload);
      })
      .addCase(deleteWordAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      });
  },
});

export const { setWords, addWord, editWord } = wordsSlice.actions;

export default wordsSlice.reducer;
