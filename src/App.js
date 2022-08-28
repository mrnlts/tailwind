import { Route, Routes } from "react-router-dom";
import "./App.css";
import cards from "./cards.json";
import Navbar from "./components/Navbar";
import Main from "./views/Main";
import Signup from "./views/Signup";

function App() {
  return (
    <div className="bg-red-100 font-sans p-8">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main cards={cards} />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
