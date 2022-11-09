import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// USE MOCKS
import { articles } from "../../mocks/articles";

export interface I_Article {
  id: string;
  author: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

const initialState: Array<I_Article> = articles;

export const articleSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    createArticle: (state, action) => {
      console.log(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { createArticle } = articleSlice.actions;

export default articleSlice.reducer;
