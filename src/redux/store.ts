import { configureStore } from "@reduxjs/toolkit";

import lawSuitReducer from "./reducers/lawsuitReducer";
import loadReducer from "./reducers/sliceReducer";
import tyReducer from "./reducers/standardTypesReducer";

export const store = configureStore({
  reducer: {
    load: loadReducer,
    standard: tyReducer,
    lawSuit: lawSuitReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
