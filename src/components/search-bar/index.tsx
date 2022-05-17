import SearchBar from "./SearchBar";

const handleKeyDown = (e: React.KeyboardEvent<object>) => {
  if (e.key === "Enter") console.log(e.key);
};

function returnSearchBar(): React.ReactElement {
  const handleOnchange = (e: React.FormEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value);
  };

  return <SearchBar onChange={handleOnchange} onkeyDown={handleKeyDown} />;
}

export default returnSearchBar;
