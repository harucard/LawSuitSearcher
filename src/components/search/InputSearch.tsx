import PropTypes from "prop-types";
import { useSelector } from "react-redux";

import { selectStatus } from "../../redux/reducers/standardTypesReducer";
import { InputSearchContainer } from "./styles";

function InputSearcher({ onChange, onKeyUp }: any) {
  const status = useSelector(selectStatus);
  return (
    <InputSearchContainer
      role="search"
      disabled={!status}
      onChange={onChange}
      placeholder="Informe número do processo"
      onKeyUp={onKeyUp}
    />
  );
}

InputSearcher.propTypes = {
  onChange: PropTypes.func.isRequired,
  onKeyUp: PropTypes.func.isRequired,
};

export default InputSearcher;
