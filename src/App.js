import React from "react";
import List from "./List";
import "./App.css";

function App() {
  const arr = [
    {
      title: "Home",
      link: "#"
    },
    {
      title: "service",
      link: "#",
      list: [
        { title: "for entrepreneurs", link: "#" },
        { title: "for students", link: "#" },
        { title: "for hobbyists", link: "#" }
      ]
    },
    {
      title: "contact",
      link: "#"
    },
    
  ];

  return (
    <div className="App">
      <List list={arr} />
    </div>
  );
}

export default App;
