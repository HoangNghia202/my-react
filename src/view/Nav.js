
import './Nav.css'
import {
  NavLink, Link
} from "react-router-dom";
const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/covid" activeClassName=''>
            Covid
          </NavLink>
        </li>
        <li>
        <NavLink to="/todoList"  activeClassName='active' >
            Todo List
          </NavLink>
        </li>
        <li>
        <NavLink to="/countdown" activeClassName='active' >
           CountDown
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
