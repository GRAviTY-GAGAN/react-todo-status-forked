import { useState } from "react";

export default function Todo({ handleAdd }) {
  const [text, setText] = useState("");

  return (
    <div>
      <input
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        type="text"
        placeholder="Enter Todos"
      />
      <button
        onClick={() => {
          handleAdd(text, setText);
        }}
      >
        Add
      </button>
    </div>
  );
}
