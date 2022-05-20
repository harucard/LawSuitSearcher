import { IMessage } from "../../../../interfaces/Message";
import { FailedContainer } from "../../styles";

function FailedMessage({ message }: IMessage) {
  return <FailedContainer>{message}</FailedContainer>;
}

export default FailedMessage;
