import { useEffect } from "react";
import { useDispatch } from "react-redux";

import App from "./App";
import { getStandardTypes } from "./redux/reducers/standardTypesReducer";
import { store } from "./redux/store";

export type AppDispatch = typeof store.dispatch;

function Start() {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getStandardTypes());
  }, []);

  return (
    <div className="App">
      <App />
    </div>
  );
}

export default Start;
