import useInstance from "../../../hooks/useInstance";
import { InfoContainer, InfoBar, InfoShow } from "../styles";
import MovInfoTable from "./movinfo/MovInfoTable";
import SectionTable from "./sectioninfo/SectionTable";

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
      <SectionTable instance={getData.partes} />
      <InfoBar>Movimentações do processo</InfoBar>
      <MovInfoTable content={getData.movs} />
    </InfoContainer>
  );
}

export default ShowInfo;
