import './Nav.css'

function Nav(props) {
  let {navigation: n} = props;
  return (
    <nav>
      <ul>
        {
          Object.keys(n).map(nav => {
            return <li key={nav}>
              <a href={n[nav]}>{nav}</a>
            </li>
          })
        }
      </ul>
    </nav>
  );
}

export default Nav;
