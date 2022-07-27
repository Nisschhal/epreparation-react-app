import QuizCard from "./quiz-card.component";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "bootstrap";
const TakeQuiz = () => {
  const { id } = useParams();

  const [questions, setQuestions] = useState([]);
  const [questionSet, setQuestionSet] = useState({});
  const [takeQuiz, setTakeQuiz] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:300/model-questions/${id}`).then((response) => {
      setQuestionSet(response.data);
      // console.log("-----------------resssssssssssssss",response.data.questions)
      setQuestions(response.data.questions);
      // setSubject(response.data.subject);
      // setQuestionType(response.data.questionType);
      // setTime(response.data.time);
      // setTotalScore(response.data.totalScore);
      // setSet(response.data.set);
      // setSetTitle(response.data.setTitle);
      // setImageUrl(response.data.imageUrl);
    });
  }, []);

  const takeHandler = () => {
    setTakeQuiz(true);
  };

  return (
    <>
    
      {takeQuiz ? (
          <QuizCard questionSet={questionSet} questions={questions} />
      ) : (
        <button type="button" onClick={takeHandler}>
        Take Quiz
      </button>
      )}
    </>
  );
};

export default TakeQuiz;
