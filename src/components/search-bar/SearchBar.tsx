import PropTypes, { InferProps } from "prop-types";
import React, { useRef } from "react";

import { SearchContainer, InputSearch, Label, InputContainer } from "./styles";

function SearchBar({
  onkeyDown,
  onChange,
  value,
}: InferProps<typeof SearchBar.propTypes>): React.ReactElement {
  const inputEl = useRef(null);

  return (
    <SearchContainer>
      <InputContainer>
        <InputSearch
          onKeyDown={onkeyDown}
          onChange={onChange}
          ref={inputEl}
          placeholder="Informe número do processo"
        />
        <Label>
          <i className="fas fa-search" />
        </Label>
      </InputContainer>
    </SearchContainer>
  );
}

SearchBar.propTypes = {
  onkeyDown: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default SearchBar;
