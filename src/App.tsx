import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import MiniProject from "./web/MiniProject";
import ConceptPage from "./web/ConceptPage";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/webtech" element={<MiniProject />} />
          <Route path="/:concept" element={<ConceptPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
