import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ArticleOne from "./ArticleOne";

function Article() {
  let navigate = useNavigate()
  let [articles, setArticles] = useState([
        {name: "Components", title: "Компоненты аналогичны функциям JavaScript. Они хранят состояние с помощью свойств и возвращают элементы React, которые затем появляются на веб-странице."},
        {name: "Props", title: "Props представляет коллекцию значений, которые ассоциированы с компонентом. Эти значения позволяют создавать динамические компоненты, которые не зависят от жестко закодированных статических данных."},
        {name: "State", title: "Объект state описывает внутреннее состояние компонента, он похож на props за тем исключением, что состояние определяется внутри компонента и доступно только из компонента. Также в отличие от props значения в state можно изменять."}
    ]);
    let goBack = () => navigate(-1)

  return (
    <div className="">
      <h2>Article</h2>
      {
        articles.map((e, index) => {
          return (
            <ArticleOne key={index} name={e.name} title={e.title}/>
          )
        })
      }
      <button onClick={goBack}>&larr; назад</button>
    </div>
  )
}
export default Article
