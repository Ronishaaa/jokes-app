import { Link } from "react-router-dom";
import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1 className="pageName">Welcome to programmer jokes!</h1>

      <button>
        <Link to={`random`}>Get Random Joke</Link>
      </button>
      <br></br>
      <button>
        <Link to={`jokes/top-10`}>Top 10 jokes</Link>
      </button>
    </div>
  );
}

export default App;
