import useInstance from "../../hooks/useInstance";
import InfoTable from "./InfoTable";
import { InfoContainer, InfoBar, InfoShow } from "./styles";

type Data = {
  getData: any;
};
function ShowInfo({ getData }: Data) {
  const { getInstance } = useInstance();
  return (
    <InfoContainer>
      <InfoBar>Número</InfoBar>
      <InfoShow>{getData.numero}</InfoShow>
      <InfoBar>Instância</InfoBar>
      <InfoShow>{getInstance(getData.instancia)}</InfoShow>
      <InfoBar>Partes</InfoBar>
      <InfoTable instance={getData.partes} />
    </InfoContainer>
  );
}

export default ShowInfo;
