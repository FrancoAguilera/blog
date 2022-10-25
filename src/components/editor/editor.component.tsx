import React, { useState } from "react";
import hljs from "highlight.js";
import ReactQuill from "react-quill";

import "react-quill/dist/quill.snow.css";
import "highlight.js/styles/atom-one-dark.css";
import "./editor.styles.css";

hljs.configure({
  languages: ["javascript", "ruby", "python", "rust", "html", "css"],
});

const modules = {
  syntax: {
    highlight: (text) => hljs.highlightAuto(text).value,
  },
  toolbar: [
    [{ header: 1 }, { header: 2 }], // custom button values
    ["bold", "italic", "underline"],
    ["blockquote"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link"],
    ["clean"],
    ["code-block"],
  ],
  clipboard: {
    matchVisual: true,
  },
};

const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "code-block",
];

export const EditorPage = () => {
  const [value, setValue] = useState("");

  return (
    <div className="editor-container">
      <ReactQuill value={value} onChange={setValue} theme="snow" modules={modules} formats={formats} />
    </div>
  );
};
