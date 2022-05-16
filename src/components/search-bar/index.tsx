import { useState } from "react";

import { Api } from "../../services/Api";
import SearchBar from "./SearchBar";

const consultApi = async (url: string) => {
  await Api.getRequest(url)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => console.log(error));
};

const handleKeyDown = (e: React.KeyboardEvent<object>) => {
  consultApi("/proc/tipos_norm_andamentos_movs");
  console.log(e.key);
};

function returnSearchBar() {
  const [value, setValue] = useState("");

  const handleOnchange = (e: React.FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
    console.log(e.currentTarget.value);
  };

  return (
    <SearchBar
      value={value}
      onChange={handleOnchange}
      onkeyDown={handleKeyDown}
    />
  );
}

export default returnSearchBar;
