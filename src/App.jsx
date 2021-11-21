import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Success from "./Success";
import Pay from "./Pay";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/pay" element={<Pay />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </Router>
  );
};

export default App;