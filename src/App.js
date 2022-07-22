// import Home from "./routes/home/home.component"
import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/home.component";
import Footer from "./components/navigation/footer.component";

import Navigation from "./components/navigation/navigation.component";
// import Authentication from "./routes/authentication/authentication.component";
import QuestionPage from "./components/model-question/question-page.component";
import Aboutus from "./components/about-us/about-us.component";
const App = () => {
  return (
    <Fragment>
      <Navigation />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="model-question" element={<QuestionPage />} />
      <Route path="about-us" element={<Aboutus />} />
      </Routes>
      <Footer />  
    </Fragment>
  );
};

export default App;
