import "./App.css";
import Header from "../header/Header";
import Article from "../article/Article";
import Footer from "../footer/Footer";
import Nav from "../header/nav/Nav";

function App(props) {
  let { title, slogan, navigation, db, text } = props;

  return (
    <div className="App">
      <Header title={title} slogan={slogan} />
      <Nav navigation={navigation} />
      <Article db={db}/>
      <Footer text={text}/>
    </div>
  );
}

export default App;
