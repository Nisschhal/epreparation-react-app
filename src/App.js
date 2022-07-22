// import Home from "./routes/home/home.component"
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/home.component";

import Navigation from "./components/navigation/navigation.component";
// import Authentication from "./routes/authentication/authentication.component";

const App = () => {
  return (
    <Routes>
    <Route path="/" element={<Navigation/>}>
     {/* can also write only index but by default its value is true */}
    <Route index={true} element={<Home />}/>
     {/* <Route path="shop" element={<Shop />} /> */}
     {/* <Route path="auth" element={<Authentication />} /> */}
     </Route>
   </Routes>
     );
};

export default App;
