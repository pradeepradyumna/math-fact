import React, { useEffect, useState } from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const [facts, setFacts] = useState([]);

  useEffect(() => {
    getFact();
  }, [query]);

  const getFact = async () => {
    const response = await fetch(
      `https://numbersapi.p.rapidapi.com/${query}/math?fragment=true&json=true`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "numbersapi.p.rapidapi.com",
          "x-rapidapi-key":
            "1e58884401msh07d814506f3b114p199f22jsnfc8fa449f0b8",
        },
      }
    );

    const data = await response.json();

    setFacts(data);
    console.log(data);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
  };

  return (
    <div className="App">
      <header className="navbar navbar-expand-lg navbar-dark bg-primary text-center align-content-center "></header>

      <form className="" onSubmit={getSearch}>
        <h1 className="text-center text-danger align-content-center">
          Want to know a cool fact about numbers?
        </h1>
        <div className="navbar navbar-expand-lg navbar-dark text-center">
          <input
            className="search-bar"
            type="text"
            placeholder="Enter a number here and hit Enter key"
            value={search}
            onChange={updateSearch}
          ></input>
        </div>
        <div className="card">
          <div className="card-header text-center">
            <h3>{query}:</h3>
          </div>
          <div className="card-body text-center">
            <blockquote className="blockquote mb-0">
              <p>{facts.text}</p>
            </blockquote>
          </div>
          <div className="card-title text-center">
            <h3>References:</h3>
            <li>
              <a href="https://reactjs.org/">React JS</a>
            </li>
            <li>
              <a href="https://getbootstrap.com/">Bootstrap</a>
            </li>
            <li>
              <a href="https://rapidapi.com/divad12/api/numbers-1">Numbers API</a>
            </li>
            <li>
              <a href="https://firebase.google.com/">Firebase</a>
            </li>
          </div>
        </div>
      </form>

      <footer className="container-fluid bg-primary fixed-bottom">
        <div className="row p-2">
          <div className="col-4 text-center text-white">
            <h3>
              Made using
              <a href="https://reactjs.org/">
                <img
                  src="./logo192.png"
                  width="50"
                  height="50"
                  alt="chai"
                ></img>
              </a>
            </h3>
          </div>
          <div className="col-8 text-center text-black">
            Created by Pradeep Pradymna
            <a href="https://github.com/pradeepradyumna">
              <img src="./gitIcon.png" width="150" height="50" alt="chai"></img>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
