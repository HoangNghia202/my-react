import { useState, useEffect } from "react";
import logo from "./logo.svg";
import Nav from "./view/Nav";
import "./App.css";
import Todo from "./view/Todo";

function App() {
  //create state name and function to update state  name
  const [name, setName] = useState("Nghia");
  // create state address
  const [address, setAddress] = useState("");

  const [todos, setTodos] = useState([
    { id: 1, title: "watching video", type: "work" },
    { id: 2, title: "reading book", type: "study" },
  ]);

  useEffect(() => {
    console.log("useEffect");
  },[address]);

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
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>hello world with react and {name}</p>
        <Todo
         todos={todos} title={"All todos"}
         handleDelete={handleDelete}
         ></Todo>
        <hr />
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
      </header>
    </div>
  );
}

export default App;
