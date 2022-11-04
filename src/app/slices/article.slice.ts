import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// USE MOCKS
import { articles } from "../../mocks/articles";

/*
  {
    id: "63644a09cc944712587d1831",
    author: "Delacruz Hamilton",
    title: "My awesome title",
    dob: "1988-11-30",
    content:
      '<h1>This is the title for my awesome post</h1><p><br></p><p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p><p><br></p><pre class="ql-syntax" spellcheck="false">.transition {\n -webkit-transition:all .3s ease-in-out;\n -moz-transition:all .3s ease-in-out;\n -o-transition:all .3s ease-in-out;\n transition:all .3s ease-in-out;\n}</pre><p><br></p><ol><li>this is on</li><li>this is two</li><li>this is four</li></ol><p><br></p><h2>Where does it come from?</h2><p>Contrary to<strong> popular belief, Lorem Ipsum</strong> is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. <em>Richard McClintock,</em></p>',
    createdAt: "2010-06-11T19:10:16.463Z",
    updatedAt: "2010-06-12T19:10:16.463Z",
  }
*/

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
