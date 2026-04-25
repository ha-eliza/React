import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { getMealById } from "../../api"
import Preloader from "../../components/preloader/Preloader"
import "./Recipe.css"

function Recipe() {
  const {id} = useParams()
  const [recipe, setRecipe] = useState({})
  useEffect(() => {
    getMealById(id).then(data => setRecipe(data.meals[0]))
  }, [id])
  return (
    <div className="wrap">
      {
        !recipe.idMeal ? <Preloader /> : (
          <div className="recipe">
            <img src={recipe.strMealThumb} alt={recipe.strMeal} />
            <h2>{recipe.strMeal}</h2>
            <table>
              <thead>
                <tr>
                  <th>Ingredient</th>
                  <th>Measure</th>
                </tr>
              </thead>
              <tbody>
                {
                  Object.keys(recipe).map(key => {
                    if (key.includes('Ingredient') && recipe[key]) {
                      return (
                        <tr>
                          <td>{recipe[key]}</td>
                          <td> {recipe[`strMeasure${key.slice(13)}`]} </td>
                        </tr>
                      )
                    }
                    return null
                  })
                }
              </tbody>
            </table>
            {
              recipe.strYoutube ? (
                <>
                <h4>Video Recipe</h4>
                  <div className="video-wrap">
                    <iframe title={recipe.strMeal} src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(-11)}`} frameborder="0" allowFullScreen></iframe>
                  </div>
                </>
              ) : null
            }
          </div>
        )
      }
    </div>
  )
}
export default Recipe
