import Modal from "react-modal";

import { CustomTable, THead, TR, TH, TBody } from "../../styles";

Modal.setAppElement("#root");

function ModalContent({ content }: any) {
  return (
    <CustomTable>
      <THead>
        <TR>
          <TH>Nome</TH>
          <TH>OAB</TH>
          <TH>CPF</TH>
          <TH>UF</TH>
        </TR>
      </THead>
      <TBody>
        {content
          ? content.map((item: any) => {
              return (
                <TR key={`tr${item[1]}${item[3]}`}>
                  <td key={`name${item[1]}${item[3]}`}>{item[1]}</td>
                  <td key={`oab${item[1]}${item[3]}`}>
                    {item[2] || "Não Informado"}
                  </td>
                  <td key={`cpf${item[1]}${item[3]}`}>
                    {item[3] || "Não Informado"}
                  </td>
                  <td key={`uf${item[1]}${item[3]}`}>
                    {item[4] || "Não Informado"}
                  </td>
                </TR>
              );
            })
          : ""}
      </TBody>
    </CustomTable>
  );
}

export default ModalContent;
