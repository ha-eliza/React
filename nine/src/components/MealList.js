import Meal from "./Meal"

function MealList({ meals = [], strCategory }) {

  return (
    <div className="list">
      {
        meals.map(el => (
          <Meal key={el.idMeal} {...el} strCategory={strCategory}/>
        ))
      }
    </div>
  )
}
export default MealList
