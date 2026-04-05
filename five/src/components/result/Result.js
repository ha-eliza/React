import './Result.css'

function Result({correct, questions}) {
  return (
    <div className="window">
      <p>Вы отгадали <b>{correct}</b> ответ{correct == 1 ? "" : correct >= 2 && correct <= 4 ? "а" : "ов"} из <b>{questions.length}</b></p>
      <a href="/" className="btn">Попробовать снова</a>
    </ div>
  )
}
export default Result;
