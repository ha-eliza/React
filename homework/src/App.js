import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import NotFoundPage from './pages/NotFoundPage';
import Home from './pages/Home';
import About from './pages/About';
import Article from './pages/Article';
import Layout from "./components/Layout";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="articles" element={<Article />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </div>
    );
  }
}

export default App;
