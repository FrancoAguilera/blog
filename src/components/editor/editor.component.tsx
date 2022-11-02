import React, { useState } from "react";
import { TextEditor } from "../text-editor/text-editor.component.tsx";
import "./editor.styles.css";

export const EditorPage = () => {
  const [title, setTitle] = useState("");

  const savepost = () => {
    const payload = {
      title,
      article,
    };

    console.log(payload);
  };

  const titleHandleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTitle(e.target.value);
  };

  return (
    <div className="editor-container">
      <input value={title} onChange={titleHandleChange} className="editor-title" type="text" placeholder="Title..." />
      <TextEditor />
      <div className="editor-save">
        <button className="btn" onClick={savepost}>
          Save
        </button>
      </div>
    </div>
  );
};
