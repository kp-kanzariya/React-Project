import React, { useState } from "react";
import TaskList from "./TaskList";
import AddTodo from "./AddTodo";

let index = 4;
const dummyData = [
  { id: 1, fruit: "Apple" },
  { id: 2, fruit: "Kiwi" },
  { id: 3, fruit: "Dragonfruit" },
];

function TodoApp() {
  const [todo, setTodo] = useState(dummyData);
  //    console.log(todo)
  const handleDelete = (xyz) => {
    // console.log(xyz)
    setTodo(
      todo.filter((v) => {
        return v.id !== xyz;
      })
    );
  };

  const handleEdit = (nextOBJECT) => {
    // console.log(nextOBJECT)
    setTodo(
      todo.map((v) => {
        // console.log(v.id)
        if (nextOBJECT.id == v.id) {
          return nextOBJECT;
        } else {
          return v;
        }
      })
    );
  };

  const handleAdd = (xyz) => {
    // console.log(xyz);;//orange
    setTodo([...todo, { id: index++, fruit: xyz }]);
  };
  return (
    <div>
      <AddTodo f={handleAdd} />
      <TaskList x={todo} obID={handleDelete} newObj={handleEdit} />
    </div>
  );
}

export default TodoApp;
