// import Home from "./routes/home/home.component"
import { Fragment, useEffect, useState } from "react";
import { Routes, Route, Switch } from "react-router-dom";
import Home from "./components/home/home.component";
import Footer from "./components/navigation/footer.component";

import Navigation from "./components/navigation/navigation.component";
import ModelQuestions from "./components/model-question/model-question.component";
import MockQuestions from "./components/model-question/mock-question.component";
import QuizQuestions from "./components/model-question/quiz-question.component";

import Aboutus from "./components/about-us/about-us.component";
import axios from "axios";
import CreateNewSet from "./components/create-set-question/create-new-set.component";
import Register from "./components/sign-up/sign-up.component";
import Login from "./components/login-in/login-in.component";
import Dashboard from "./components/dashboard/dashboard.component";
import PrivateRoute from "./components/private-route";
import UpdateSet from "./components/update/update-set.component";
import TakeQuiz from "./components/take-quiz/take-quiz.component";
const App = () => {
  const [modelQuestion, setModelQuestion] = useState([]);

  const [mockQuestion, setMockQuestion] = useState([]);
  const [quizQuestion, setQuizQuestion] = useState([]);
  const getMockQuestions = () => {
    axios.get("http://localhost:300/mock-questions").then((response) => {
      setMockQuestion(response.data);
    });
  };
  const getQuizQuestions = () => {
    axios.get("http://localhost:300/quiz-questions").then((response) => {
      setQuizQuestion(response.data);
    });
  };

  useEffect(() => {
    axios.get("http://localhost:300/model-questions").then((response) => {
      setModelQuestion(response.data);
    });
    getMockQuestions();
    getQuizQuestions();
  }, []);

  console.log(modelQuestion);

  const getMockQuestion = () => {
    axios.get(`http://localhost:3000/mock-quesitons`)
      .then(res => {
        const mockQuestions = res.data;
        console.log(mockQuestions);
        setMockQuestion(mockQuestions);
      }) };

  const getQuizQuestion = () => {
    axios.get(`http://localhost:3000/quiz-questions`)
      .then(res => {
        const quizQuestions = res.data;
        console.log(quizQuestions);
        setQuizQuestion(quizQuestions);
      })
  };

  return (
    <Fragment>
      <Navigation />
      <Routes>

        <Route path="signup" element={<Register />}></Route>
        <Route path="login" element={<Login />}></Route>

        <Route
          path="/"
          element={
            <Home
              models={modelQuestion}
              mocks={mockQuestion}
              quizes={quizQuestion}
            />
          }
        />
        <Route
          path="dashboard"
          element={<PrivateRoute>
            <Dashboard />
            </PrivateRoute>
            }
        />
        <Route
          path="model-questions"
          element={<ModelQuestions models={modelQuestion} />}
        />
        <Route
          path="model-questions/:id"
          element={<UpdateSet />}
        />
        <Route
          path="mock-questions"
          element={<MockQuestions mocks={mockQuestion} />}
        />
        <Route path="quiz" element={<QuizQuestions quizes={quizQuestion} />} />
        <Route path="about-us" element={<Aboutus />} />
        {/* <Route path="test/:id" element={<QuestionTest />} /> */}

        <Route path="new-set" element={<CreateNewSet />} />
        <Route path="take-quiz/:id" element={<TakeQuiz />} />
      </Routes>
      <Footer />
    </Fragment>
  );
};

export default App;
