import "./App.css";
import Likes from "./Likes";
import Title from "./Title"

function App() {
  const image =
    "https://i.pinimg.com/736x/35/3f/b7/353fb7fac8b1b9f8829f89650210f206.jpg";
  return (
    <div className="App">
      <div className="wrap">
        <div className="card">
          <div className="card-image">
            <img src={image} alt="" />
            <Title />
            <Likes />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
