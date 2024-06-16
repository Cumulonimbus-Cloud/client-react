import QuestionElem from './QuestionElem';

function ExampleQuestion() {
  return (
    <div id="example-question">
        <QuestionElem
            question="필수과목 다 수강했어?" 
            position="left"/>
        <QuestionElem
            question="몇 학점 더 들어야지 졸업할 수 있어?"
            position="right"/>
    </div>
  );
}

export default ExampleQuestion;