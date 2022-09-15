import {useState} from "react";
import logo from './logo.svg';
import Nav from './view/Nav';
import './App.css';



function App() {
  //create state name and function to update state  name
  const [name, setName] = useState("Nghia");
  // create state address
  const [address, setAddress] = useState("");
  
const [todos, setTodos] = useState([
  {id: 1, title: "watching video"},
  {id: 2, title: "reading book"},
]);

  const updateName = (event) => {
    setAddress(event.target.value);
  };

  const handleClick = () => {
    if (!address) {
      alert("Please enter address");
      return;
    }
      
    console.log('clicked'); 
    let newtodo={id: Math.floor(Math.random()*1000), title: address};
    let todosCopy= [...todos, newtodo];
    setTodos(todosCopy);
    setAddress("");
  }

  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          hello world with react and {name} 
        </p>
        <div className="todos-container">
          {todos.map ((item, index)=>{ return <div key={item.id}> {index+1} { item.title}</div>}
           
          )}
        </div>
        <input type={"text"} value={address} onChange={(event)=>updateName(event)}></input>
        <button onClick={()=> handleClick()}> click me </button>
       
      </header>
    </div>
  );
}

export default App;
