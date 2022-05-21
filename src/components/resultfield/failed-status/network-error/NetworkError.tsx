import FailedMessage from "../failed-message-template/FailedMessage";

function NetworkError() {
  const message =
    "Erro de Rede.Por favor,verifique se o token está setado corretament em src/setupProxy.js";
  return <FailedMessage message={message} />;
}

export default NetworkError;
