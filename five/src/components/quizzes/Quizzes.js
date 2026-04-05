import "./Quizzes.css";
import ProgressBar from "../progress/ProgressBar";

function Quizzes(props) {
  const { question, onClickVariant, step, questions } = props;
  const percents = Math.round(step / questions.length * 100);

  return (
    <>
      <ProgressBar percents={percents}/>
      <h3 className="title">{question.title}</h3>
      <ol>
        {
        question.variants.map((text, index) =>
          <li
            key={index}
            onClick={() => onClickVariant(index)}
          >{text}</li>
        )
        }
      </ol>
    </>
  );
}

export default Quizzes;
