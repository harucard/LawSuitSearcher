import React, { useEffect } from "react";

import NavBar from "./components/navbar/Navbar";
import Search from "./components/search-bar";
import ResultField from "./components/search-result";
import StatusBar from "./components/status-bar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Search />
      <StatusBar />
      <ResultField />
    </div>
  );
}

export default App;
