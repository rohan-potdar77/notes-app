import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import List from "./components/List";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/list" element={<List />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
