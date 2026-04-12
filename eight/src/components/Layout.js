import { NavLink, Outlet } from "react-router-dom";
function Layout() {
  return (
    <div>
      <ul className="nav">
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "pink" : "black")}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/article"
            style={({ isActive }) => ({ color: isActive ? "green" : "blue" })}
          >
            Article
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
export default Layout;
