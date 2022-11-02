import hljs from "highlight.js";

hljs.configure({
  languages: ["javascript", "ruby", "python", "rust", "html", "css"],
});

export const modules = {
  syntax: {
    highlight: (text) => hljs.highlightAuto(text).value,
  },
  toolbar: [
    [{ header: 1 }, { header: 2 }],
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

export const formats = [
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
