import moment from "moment";
import React, { useState } from "react";
import Modal from "react-modal";

import usePattern from "../../../../hooks/usePattern";
import {
  CustomTable,
  THead,
  TR,
  TH,
  TBody,
  Label,
  TD,
  TableContainer,
} from "../../styles";
import MovModalContent from "./MovModalContent";

Modal.setAppElement("#root");
function MovInfo({ content }: any): React.ReactElement {
  const [modalIsOpen, setIsopen] = useState(false);
  const [modalContent, setContent] = useState("");
  const { getPattern } = usePattern();

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
    },
  };
  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        style={customStyles}
      >
        {modalContent !== "" ? <MovModalContent content={modalContent} /> : ""}
      </Modal>
      <TableContainer>
        <CustomTable className="table-striped">
          <THead>
            <TR>
              <TH>Data</TH>
              <TH>Titulo-Mov</TH>
              <TH>Texto</TH>
              <TH>Juiz</TH>
              <TH>Andamento</TH>
            </TR>
          </THead>
          <TBody>
            {content
              ? content.map((item: any) => {
                  return (
                    <TR key={`tr${item[4]}${item[3]}`}>
                      <TD className="mov" key={`data${item[0]}${item[3]}`}>
                        {moment(item[0]).format("DD/MM/YYYY")}
                      </TD>
                      <TD className="mov" key={`title${item[1]}${item[3]}`}>
                        {item[1]}
                      </TD>
                      <TD className="mov">
                        <Label
                          onClick={() => {
                            setContent(item[2]);
                            handleOpenModal();
                          }}
                        >
                          <i className="fas fa-info-circle" />
                        </Label>
                      </TD>
                      <TD className="mov" key={`judge${item[1]}${item[3]}`}>
                        {item[3] || "Não Informado"}
                      </TD>
                      <TD className="mov">{getPattern(item[5][0])}</TD>
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

export default MovInfo;
