import PropTypes, { InferProps } from "prop-types";

import InputSearcher from "./InputSearch";
import LabelBar from "./LabelComponent";
import { SearchContainer, InputContainer } from "./styles";

function SearchBar({
  onkeychange,
  onClick,
  onKeyUp,
}: InferProps<typeof SearchBar.propTypes>): React.ReactElement {
  return (
    <SearchContainer>
      <InputContainer>
        <InputSearcher onChange={onkeychange} onKeyUp={onKeyUp} />
        <LabelBar onClick={onClick} />
      </InputContainer>
    </SearchContainer>
  );
}

SearchBar.propTypes = {
  onkeychange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  onKeyUp: PropTypes.func.isRequired,
};

export default SearchBar;
