import HomePage from "./pages/HomePage";
import Header1 from "./components/Header1";
import CreateBook from "./pages/createBook";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header1 />

      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/createbook/:book" element={<CreateBook />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
