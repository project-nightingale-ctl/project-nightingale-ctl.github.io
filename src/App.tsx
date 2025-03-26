import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";

function App() {
  return (
    <Router>
      {/* <Toaster /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:paper_url" element={<Blog />} />
      </Routes>
    </Router>
  );
}

export default App;