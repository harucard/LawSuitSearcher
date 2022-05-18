import React, { useState } from "react";
import Modal from "react-modal";

import LawyerInfo from "./LawyerModal";
import {
  TableContainer,
  CustomTable,
  THead,
  TR,
  TD,
  TBody,
  TH,
  Label,
} from "./styles";

function InfoTable({ instance }: any): React.ReactElement {
  const [modalIsOpen, setIsopen] = useState(false);
  const [modalContent, setContent] = useState("");

  const handleOpenModal = () => {
    setIsopen(true);
  };
  const handleCloseModal = () => {
    setIsopen(false);
  };
  const customStyles = {
    content: {
      height: "300px",
      width: "700px",
      margin: "20px auto",
    },
  };

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        style={customStyles}
      >
        {modalContent !== "" ? (
          <LawyerInfo content={modalContent} />
        ) : (
          <p>nao</p>
        )}
      </Modal>
      <TableContainer>
        <CustomTable>
          <THead>
            <TR>
              <TH>NOME</TH>
              <TH>CNPJ</TH>
              <TH>CPF</TH>
              <TH>DOCUMENTO</TH>
              <TH>RELAÇÃO/PAPEL</TH>
              <TH>ADVOGADOS</TH>
              <TH>AUTORA</TH>
              <TH>CO-AUTORA</TH>
              <TH>RÉ</TH>
              <TH>NEUTRA</TH>
            </TR>
          </THead>
          <TBody>
            {instance.map((item: any) => {
              return (
                <TR key={`tr${item[1]}${item[3]}`}>
                  <TD key={`name${item[1]}${item[3]}`}>{item[3]}</TD>
                  <TD key={`cnpj${item[1]}${item[4]}`}>
                    {item[4] || "Não Informado"}
                  </TD>
                  <TD key={`cpf${item[1]}${item[5]}`}>
                    {item[5] || "Não Informado"}
                  </TD>
                  <TD key={`doc${item[1]}${item[6]}`}>
                    {item[6] || "Não Informado"}
                  </TD>
                  <TD key={`rel${item[1]}${item[8]}`}>
                    {item[8] || "Não Informado"}
                  </TD>
                  <TD>
                    {Object.keys(item[9]).length !== 0 ? (
                      <Label
                        onClick={() => {
                          setContent(item[9]);
                          handleOpenModal();
                        }}
                      >
                        <i className="fas fa-info-circle" />
                      </Label>
                    ) : (
                      "Sem Advogado"
                    )}
                  </TD>
                  <TD>{item[10] ? "sim" : "não"}</TD>
                  <TD>{item[11] ? "sim" : "não"}</TD>
                  <TD>{item[12] ? "sim" : "não"}</TD>
                  <TD>{item[13] ? "sim" : "não"}</TD>
                </TR>
              );
            })}
          </TBody>
        </CustomTable>
      </TableContainer>
    </>
  );
}

export default InfoTable;
