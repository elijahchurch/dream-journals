import Home from "./Home";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./Header";
import SignUp from "./SignUp";
import DreamForm from "./DreamForm";

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/signUp" element={<SignUp/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/enterDream" element={<DreamForm/>}/>
      </Routes>
    </Router>
  );
}

export default App;

