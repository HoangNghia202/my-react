
import logo from "./logo.svg";
import Nav from "./view/Nav";
import "./App.css";
import "./view/Nav.css";
import Covid from "./view/Covid";
import CountDown from "./view/CountDown";
import TodoList from "./view/TodoList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserDetail from "./view/UserDetail";
function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Routes>
            <Route path="/todoList" element={<TodoList></TodoList>}></Route>
            <Route path="/covid"   element={<Covid></Covid>}></Route>
            <Route path="/countdown"   element={<CountDown></CountDown>}></Route>
            <Route path="/users/:id" element={<UserDetail></UserDetail>}></Route>
          </Routes>
        </header>
      </div> 
    </Router>
  );
}
export default App;
