import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CreatePoll from "./pages/CreatePoll";
import Result from "./pages/Result";
import TrendingPolls from "./pages/TrendingPolls";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreatePoll />} />
        <Route path="/result" element={<Result />} />
        <Route path="/trending" element={<TrendingPolls />} />
      </Routes>
    </Router>
  );
}

export default App;
