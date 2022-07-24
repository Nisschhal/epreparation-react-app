// import Home from "./routes/home/home.component"
import { Fragment, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/home.component";
import Footer from "./components/navigation/footer.component";

import Navigation from "./components/navigation/navigation.component";
import ModelQuestions from "./components/model-question/model-question.component";
import MockQuestions from "./components/model-question/mock-question.component";
import QuizQuestions from "./components/model-question/quiz-question.component";

import Aboutus from "./components/about-us/about-us.component";
import axios from "axios";
const App = () => {

  const [modelQuestion, setModelQuestion] = useState([]);

  useEffect(
    axios.get(`http://localhost:300/model-quesitons`)
      .then(res => {
        const modelQuestions = res.data;
        console.log(modelQuestions);
        setModelQuestion(modelQuestions);
      })
    , []);

  const [mockQuestion, setMockQuestion] = useState([]);

  // const getMockQuestion = () => {
  //   axios.get(`http://localhost:3000/mock-quesitons`)
  //     .then(res => {
  //       const mockQuestions = res.data;
  //       console.log(mockQuestions);
  //       setMockQuestion(mockQuestions);
  //     }) };


  const [quizQuestion, setQuizQuestion] = useState([]);

  // const getQuizQuestion = () => {
  //   axios.get(`http://localhost:3000/quiz-questions`)
  //     .then(res => {
  //       const quizQuestions = res.data;
  //       console.log(quizQuestions);
  //       setQuizQuestion(quizQuestions);
  //     })
  // };



  return (
    <Fragment>
      <Navigation />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="model-question" element={<ModelQuestions models={modelQuestion} />} />
      <Route path="mock-text" element={<MockQuestions mocks={mockQuestion} />} />
      <Route path="quiz" element={<QuizQuestions quizes={quizQuestion} />} />
      <Route path="about-us" element={<Aboutus />} />
      </Routes>
      <Footer />  
    </Fragment>
  );
};

export default App;
