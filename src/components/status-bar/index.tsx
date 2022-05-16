import StatusBar from "./StatusBar";

const title = (): string => {
  return "Resultados da Pesquisa";
};

function returnStatusBar() {
  return <StatusBar title={title()} />;
}

export default returnStatusBar;
