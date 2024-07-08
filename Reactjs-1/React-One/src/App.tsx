import { Outlet, NavLink } from "react-router-dom";

const App = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="about" className={(e) => (e.isActive ? "bgCol" : "")}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="product"
              className={(e) => (e.isActive ? "bgCol" : "")}
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="contact"
              className={(e) => (e.isActive ? "bgCol" : "")}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="InputCapture"
              className={(e) => (e.isActive ? "bgCol" : "")}
            >
              Input Capture
            </NavLink>
          </li>
          <li>
            <NavLink to="/user" className={(e) => (e.isActive ? "bgCol" : "")}>
              User
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />

      <footer>
        <h1>dashboard</h1>
      </footer>
    </>
  );
};

export default App;
