import { MouseEventHandler, useState } from "react";
import { useDispatch } from "react-redux";

import useTestMatch from "../../hooks/useTestMatch";
import { search, changeStatus } from "../../redux/reducers/lawsuitReducer";
import {
  setmalformedNumber,
  unsetmalformedNumber,
} from "../../redux/reducers/sliceReducer";
import { AppDispatch } from "../../redux/store";
import SearchBar from "./SearchBar";

function returnSearchBar(): React.ReactElement {
  const { tesIfmatch } = useTestMatch();
  const dispatch: AppDispatch = useDispatch();
  const [inputvalue, setInputValue] = useState("");

  const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
  };

  const sendRequest = () => {
    dispatch(unsetmalformedNumber());
    dispatch(changeStatus("stopped"));
    if (tesIfmatch(inputvalue)) {
      dispatch(search(inputvalue));
    } else {
      dispatch(setmalformedNumber());
    }
  };

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (inputvalue !== "" && e.key === "Enter") {
      sendRequest();
    }
  };

  const handleClick = () => {
    if (inputvalue !== "") {
      sendRequest();
    }
  };

  return (
    <SearchBar
      onKeyUp={handleKeyUp}
      onClick={handleClick}
      onkeychange={handleOnChange}
    />
  );
}

export default returnSearchBar;
