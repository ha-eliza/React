import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Article from "./Article";
import "./App.css";
import Layout from "./components/Layout";
import AboutInfo from "./AboutInfo";
import NotFoundPage from './NotFoundPage'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="about/:id" element={<AboutInfo />} />
          <Route path="article" element={<Article />} />
          <Route path="*" element={<NotFoundPage/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
