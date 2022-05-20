import Modal from "react-modal";

import { CustomTable, THead, TR, TH, TBody, TD } from "../../styles";

Modal.setAppElement("#root");

function ModalContent({ content }: any) {
  return (
    <CustomTable className="table-striped">
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
                  <TD className="lawyer-modal" key={`name${item[1]}${item[3]}`}>
                    {item[1]}
                  </TD>
                  <TD className="lawyer-modal" key={`oab${item[1]}${item[3]}`}>
                    {item[2] || "Não Informado"}
                  </TD>
                  <TD className="lawyer-modal" key={`cpf${item[1]}${item[3]}`}>
                    {item[3] || "Não Informado"}
                  </TD>
                  <TD className="lawyer-modal" key={`uf${item[1]}${item[3]}`}>
                    {item[4] || "Não Informado"}
                  </TD>
                </TR>
              );
            })
          : ""}
      </TBody>
    </CustomTable>
  );
}

export default ModalContent;
