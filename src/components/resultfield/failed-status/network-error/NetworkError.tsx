import FailedMessage from "../failed-message-template/FailedMessage";

function NetworkError() {
  const message =
    "Erro de Rede.Por favor,verifique se o token está setado corretament no .env do projeto";
  return <FailedMessage message={message} />;
}

export default NetworkError;
