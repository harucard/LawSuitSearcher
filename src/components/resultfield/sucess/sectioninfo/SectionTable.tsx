import React, { useState } from "react";
import Modal from "react-modal";

import {
  TableContainer,
  CustomTable,
  THead,
  TR,
  TD,
  TBody,
  TH,
  Label,
} from "../../styles";
import LawyerModalContent from "./LawyerModalContent";

function LawyerTable({ instance }: any): React.ReactElement {
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
      width: "60%",
      margin: "20px auto",
      display: "flex",
      justiContent: "center",
      padding: "20px",
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
          <LawyerModalContent content={modalContent} />
        ) : (
          ""
        )}
      </Modal>
      <TableContainer>
        <CustomTable className="table-striped">
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
            {instance
              ? instance.map((item: any) => {
                  return (
                    <TR key={`tr${item[1]}${item[3]}`}>
                      <TD className="section" key={`name${item[1]}${item[3]}`}>
                        {item[3]}
                      </TD>
                      <TD className="section" key={`cnpj${item[1]}${item[4]}`}>
                        {item[4] || "Não Informado"}
                      </TD>
                      <TD className="section" key={`cpf${item[1]}${item[5]}`}>
                        {item[5] || "Não Informado"}
                      </TD>
                      <TD className="section" key={`doc${item[1]}${item[6]}`}>
                        {item[6] || "Não Informado"}
                      </TD>
                      <TD className="section" key={`rel${item[1]}${item[8]}`}>
                        {item[8] || "Não Informado"}
                      </TD>
                      <TD className="section">
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
                      <TD className="section">{item[10] ? "sim" : "não"}</TD>
                      <TD className="section">{item[11] ? "sim" : "não"}</TD>
                      <TD className="section">{item[12] ? "sim" : "não"}</TD>
                      <TD className="section">{item[13] ? "sim" : "não"}</TD>
                    </TR>
                  );
                })
              : ""}
          </TBody>
        </CustomTable>
      </TableContainer>
    </>
  );
}

export default LawyerTable;
