import NavBar from "./components/navbar/Navbar";
import ResultField from "./components/resultfield/result-container";
import Search from "./components/search";
import StatusBar from "./components/statusbar";

function App() {
  return (
    <>
      <NavBar />
      <Search />
      <StatusBar />
      <ResultField />
    </>
  );
}

export default App;
