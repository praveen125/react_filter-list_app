import React, { useState } from "react";
import "./App.css";

function App() {
  const persons = [
    { name: "Anand" },
    { name: "Axar" },
    { name: "Ashi" },
    { name: "Bhumi" },
    { name: "Badhra" },
    { name: "Boss" },
    { name: "Cindrella" },
    { name: "Cse" },
    { name: "Cbsc" },
  ];
  const [name, setName] = useState("");

  const onChange = (e) => {
    setName(e.target.value);
  };

  const results = persons.filter((user) => {
    return user.name.toLowerCase().includes(name.toLowerCase());
  });
  return (
    <div className="App">
      <h1>My Contacts</h1>

      <input
        className="input"
        type="text"
        value={name}
        onChange={onChange}
        placeholder="search Names.."
      />
      <div className="names">
        {results.map((user) => (
          <li className="row">
            <span>{user.name}</span>
          </li>
        ))}
      </div>
    </div>
  );
}
export default App;
