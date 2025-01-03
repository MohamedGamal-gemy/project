import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Project from "./Pages/Project";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Project />}>
          <Route path="/:id" element={<Layout />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
