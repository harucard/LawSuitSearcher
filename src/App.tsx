import React from "react";

import NavBar from "./components/navbar/Navbar";
import Search from "./components/search-bar/SearchBar";
import ResultField from "./components/search-result/ResultField";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Search />
      <ResultField />
    </div>
  );
}

export default App;
