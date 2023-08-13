import logo from "./logo.png";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/Home";

function App() {
  return (
    <>
      <div className="App">
        <nav>
          <img className="logo" src={logo} alt="" />
          <div id="toolbar">
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">How to buy</a>
            <a href="/">Buy Now</a>
            <button>Connect Wallet</button>
          </div>
        </nav>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
