import React, { useState } from "react";

function AddTodo({ f }) {
  const [fruitName, setFruitName] = useState("");
  return (
    <div>
      <input
        type="text"
        value={fruitName}
        onChange={(e) => {
          setFruitName(e.target.value);
        }}
      />
      <button
        onClick={() => {
          f(fruitName);
        }}
      >
        Add
      </button>
    </div>
  );
}

export default AddTodo;
