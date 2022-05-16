import PropTypes, { InferProps } from "prop-types";

import { StatusContainer } from "./styles";

function StatusBar({
  title,
}: InferProps<typeof StatusBar.propTypes>): React.ReactElement {
  return (
    <StatusContainer>
      <p>{title}</p>
    </StatusContainer>
  );
}

StatusBar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default StatusBar;
