import { useEffect } from "react";
import { useDispatch } from "react-redux";

import NavBar from "./components/navbar/Navbar";
import Search from "./components/search-bar";
import ResultField from "./components/search-result";
import StatusBar from "./components/status-bar";
import { getStandardTypes } from "./redux/reducers/standardTypesReducer";
import { store } from "./redux/store";

export type AppDispatch = typeof store.dispatch;

function App() {
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(getStandardTypes());
  }, []);
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
