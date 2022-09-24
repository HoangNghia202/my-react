import { useState, useEffect } from "react";
import Todo from "./Todo";


const TodoList = () => {
// create state address
const [address, setAddress] = useState("");

const [todos, setTodos] = useState([
  { id: 1, title: "watching video", type: "work" },
  { id: 2, title: "reading book", type: "study" },
]);

useEffect(() => {
  console.log("useEffect");
}, [address]);

const updateName = (event) => {
  setAddress(event.target.value);
};

const handleClick = () => {
  if (!address) {
    alert("Please enter address");
    return;
  }

  console.log("clicked");
  let newtodo = {
    id: Math.floor(Math.random() * 1000),
    title: address,
    type: "study",
  };
  let todosCopy = [...todos, newtodo];
  setTodos(todosCopy);
  setAddress("");
};

const handleDelete = (id) => {
  let todosCopy = [...todos];
  let index = todosCopy.findIndex((item) => item.id === id);
  todosCopy.splice(index, 1);
  setTodos(todosCopy);
  console.log("deleted >>>", id);
};



  return (
    <div>
      <Todo
        todos={todos}
        title={"All todos"}
        handleDelete={handleDelete}
      ></Todo>

      <Todo
        todos={todos.filter((item) => item.type === "study")}
        title={"Todo type study"}
        handleDelete={handleDelete}
      ></Todo>
      <input
        type={"text"}
        value={address}
        onChange={(event) => updateName(event)}
      ></input>
      <button onClick={() => handleClick()}> click me </button>
    </div>
  );
};

export default TodoList;
