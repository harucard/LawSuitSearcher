import FailedMessage from "../failed-message-template/FailedMessage";

function NotFound() {
  const message = "Processo não encontrado";
  return <FailedMessage message={message} />;
}

export default NotFound;
