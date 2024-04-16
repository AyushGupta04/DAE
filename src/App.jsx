import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import NominationForm from "./components/NominationForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/DAE/" element={<Home />} />
        <Route path="/DAE/form" element={<NominationForm />} />
      </Routes>
    </Router>
  );
}

export default App;
