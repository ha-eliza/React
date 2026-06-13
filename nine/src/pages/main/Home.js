// import { useState, useEffect } from "react";
// import { getAllCategories } from "../../api";
// import Preloader from "../../components/preloader/Preloader";
// import CategoryList from "../../components/category/CategoryList";
import Article from "./Article";

function Home() {
  // const [catalog, setCatalog] = useState([])
  // useEffect(() => {
  //   getAllCategories().then(data => {
  //     setCatalog(data.categories)
  //   })
  // }, [])
  // return (
  //   <div className="wrap">
  //     {
  //       !catalog.length ? <Preloader /> : <CategoryList catalog={catalog}/>
  //     }
  //   </div>
  // )
  return (
    <div className="wrap">
      <h1>Главная страница</h1>
      <p>Ознакомьтесь с нашими последними статьями:</p>

      <Article
        title="Изучаем React в 2026 году"
        author="Анастасия"
        text="Функциональные компоненты и props — это основа разработки на React. Они делают код гибким и понятным."
      />

      <Article
        title="Почему Vite лучше Webpack?"
        author="Иван"
        text="Vite обеспечивает мгновенный запуск сервера разработки и очень быструю сборку проекта за счет использования ES-модулей."
      />
    </div>
  );
}
export default Home;
