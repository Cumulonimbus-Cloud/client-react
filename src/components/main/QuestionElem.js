import "./QuestionElem.css";

function QuestionElem({ question, position }) {
  return (
    <div className={`question-element ${position}`}>
        {question}
    </div>
  );
}

export default QuestionElem;