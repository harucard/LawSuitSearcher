import FailedMessage from "../failed-message-template/FailedMessage";

function MalformedNumber() {
  const message = "Número mal formado";
  return <FailedMessage message={message} />;
}

export default MalformedNumber;
