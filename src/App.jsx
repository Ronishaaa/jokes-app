import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1 className="pageName">Home Page</h1>
      <p>Welcome to programmer jokes!</p>
      <button>Get Random Joke</button>
      <br></br>
      <button>Top 10 jokes</button>
    </div>
  );
}

export default App;
