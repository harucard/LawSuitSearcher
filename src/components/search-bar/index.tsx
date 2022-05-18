import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import useTestMatch from "../../hooks/useTestMatch";
import { search, selectData } from "../../redux/reducers/lawsuitReducer";
import {
  startLoading,
  stopLoading,
  setmalformedNumber,
  setnotfound,
  unsetnotfound,
  setsuccess,
} from "../../redux/reducers/sliceReducer";
import { store } from "../../redux/store";
import SearchBar from "./SearchBar";

export type AppDispatch = typeof store.dispatch;

function returnSearchBar(): React.ReactElement {
  const act = useDispatch();
  const data = useSelector(selectData);
  const { tesIfmatch } = useTestMatch();
  const dispatch: AppDispatch = useDispatch();

  const [inputvalue, setInputValue] = useState("");

  const resetFields = () => {
    act(unsetnotfound());
    act(stopLoading());
  };

  const handleKeyDown = (e: React.KeyboardEvent<object>) => {
    // act(startLoading());
  };

  const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
    resetFields();
    setInputValue(e.currentTarget.value);
  };

  const handleClick = async () => {
    resetFields();
    act(startLoading());

    if (tesIfmatch(inputvalue)) {
      await dispatch(search(inputvalue));
      console.log(data);
      if (Object.keys(data).length) {
        resetFields();
        act(setsuccess());
      } else act(setnotfound());
      act(stopLoading());
    } else {
      act(setmalformedNumber());
      act(stopLoading());
    }
  };

  return (
    <SearchBar
      onClick={handleClick}
      onkeychange={handleOnChange}
      onkeydown={handleKeyDown}
    />
  );
}

export default returnSearchBar;
