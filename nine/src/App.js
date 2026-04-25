import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./pages/Layout";
import Home from "./pages/main/Home";
import About from "./pages/main/About";
import Contact from "./pages/main/Contact";
import NotFound from "./pages/main/NotFound";
import Category from "./pages/main/Category";
import Recipe from "./pages/main/Recipe";

function App() {
  const text = {
    title: "Welcome to TheMealDB",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat doloribus sint at dicta voluptatum veniam impedit quo illum quam? Officia quam libero tempore voluptate aut?",
  };
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About text={text}/>} />
        <Route path="contact" element={<Contact />} />
        <Route path="category/:name" element={<Category />}/>
        <Route path="category/:name/:id"  element={<Recipe />}/>
        <Route path="*" element={<NotFound />}/>
      </Route>
    </Routes>
  );
}
export default App;
