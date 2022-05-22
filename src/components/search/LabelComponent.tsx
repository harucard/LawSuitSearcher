import { Label } from "./styles";

type Func = {
  onClick: any;
};

function SearchLabel({ onClick }: Func) {
  return (
    <Label role="button" data-testeid="search-label" onClick={onClick}>
      <i className="fas fa-search" />
    </Label>
  );
}

export default SearchLabel;
