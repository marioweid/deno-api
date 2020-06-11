import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  function fetchUsers() {
    console.log("clicked");
    fetch("http://localhost:13337/users", { mode: "cors" })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => {
        console.log("Error");
        console.log(error);
      });
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src / App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <button onClick={fetchUsers}>
          Click me!
        </button>
      </header>
    </div>
  );
}

export default App;
