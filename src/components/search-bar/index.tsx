import { useState } from "react";
import { useDispatch } from "react-redux";

import useTestMatch from "../../hooks/useTestMatch";
import { search, changeStatus } from "../../redux/reducers/lawsuitReducer";
import {
  setmalformedNumber,
  unsetmalformedNumber,
} from "../../redux/reducers/sliceReducer";
import { store } from "../../redux/store";
import SearchBar from "./SearchBar";

export type AppDispatch = typeof store.dispatch;

function returnSearchBar(): React.ReactElement {
  const act = useDispatch();

  const { tesIfmatch } = useTestMatch();
  const dispatch: AppDispatch = useDispatch();

  const [inputvalue, setInputValue] = useState("");

  const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
  };

  const handleClick = () => {
    act(unsetmalformedNumber());
    dispatch(changeStatus("stopped"));
    if (tesIfmatch(inputvalue)) {
      console.log("verdadeiro");
      dispatch(search(inputvalue));
    } else {
      console.log("falso");
      act(setmalformedNumber());
    }
  };

  return <SearchBar onClick={handleClick} onkeychange={handleOnChange} />;
}

export default returnSearchBar;
