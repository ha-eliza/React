import logo from "./logo.svg"
import './Header.css'

function Header(props) {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>{props.title}</h1>
      <p>Edit <code>src/App.js</code> to start project</p>
      <p>{props.slogan}</p>
    </header>
  );
}

export default Header;
