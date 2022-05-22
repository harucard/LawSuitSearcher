import { configureStore } from "@reduxjs/toolkit";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";

import lawSuitReducer from "../redux/reducers/lawsuitReducer";
import loadReducer from "../redux/reducers/sliceReducer";
import typeReducer from "../redux/reducers/standardTypesReducer";

function renderWithRedux(
  component: React.ReactElement,
  {
    store = configureStore({
      reducer: {
        load: loadReducer,
        standard: typeReducer,
        lawSuit: lawSuitReducer,
      },
    }),
  } = {}
) {
  return render(<Provider store={store}>{component}</Provider>);
}

const store = configureStore({
  reducer: {
    load: loadReducer,
    standard: typeReducer,
    lawSuit: lawSuitReducer,
  },
});
function ReduxProvider({ children }: any) {
  return <Provider store={store}>{children}</Provider>;
}

export { renderWithRedux, ReduxProvider };
