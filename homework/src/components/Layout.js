import { NavLink, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <header style={{display: 'flex', justifyContent: 'space-around'}}>
        <NavLink to="/" className={({isActive}) => (isActive ? 'red' : 'black')}>Home Page</NavLink>
        <NavLink to="/about" className={({isActive}) => (isActive ? 'red' : 'black')}>About</NavLink>
        <NavLink to="/articles" className={({isActive}) => (isActive ? 'red' : 'black')}>Articles</NavLink>
      </header>
      <Outlet />
    </div>
  )
}
export default Layout
