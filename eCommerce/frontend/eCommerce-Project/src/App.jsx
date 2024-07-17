import react from "react";
import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <>
      <div className="px-10">
        <nav className="border-b p-4">
          <ul className="flex items-center gap-4">
            <li>
              <Link to="/">Home</Link>
              <Link to="/products">Product List</Link>
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </nav>
        <Outlet />
        <footer>This is footer section</footer>
      </div>
    </>
  );
}

export default App;
