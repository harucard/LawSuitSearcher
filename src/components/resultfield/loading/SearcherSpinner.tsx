import PropTypes, { InferProps } from "prop-types";
import { ClipLoader } from "react-spinners";

import {
  SpinnerContainer,
  TextContainer,
  ClipContainer,
  Text,
} from "../styles";

function SearcherSpinner({
  color,
  loading,
}: InferProps<typeof SearcherSpinner.propTypes>): React.ReactElement {
  return (
    <SpinnerContainer>
      <TextContainer>
        <Text>Buscando..</Text>
      </TextContainer>
      <ClipContainer>
        <ClipLoader color={color} loading={loading} />
      </ClipContainer>
    </SpinnerContainer>
  );
}

SearcherSpinner.propTypes = {
  color: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default SearcherSpinner;
