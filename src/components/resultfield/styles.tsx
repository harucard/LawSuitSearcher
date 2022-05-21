import styled from "styled-components";

export const FieldContainer = styled.div`
  margin: 10px auto;
  width: 100vw;
  height: 640px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  padding-top: 5px;
`;

export const SpinnerContainer = styled.div`
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`;

export const TextContainer = styled.div`
  margin-bottom: 10px;
`;
export const ClipContainer = styled.div`
  margin-left: 10px;
  display: flex;
  justify-content: center;
`;

export const Text = styled.p`
  font-size: 2rem;
  color: #920606;
  @media (max-width: 700px) {
    font-size: 1em;
  }
`;

export const InfoContainer = styled.div`
  width: 100%;
`;
export const ModalContainer = styled.div`
  text-align: justify;
  word-wrap: break-word;
  font-size: 20px;
  line-height: 1.6;
  padding: 10px;
  @media (max-width: 700px) {
    font-size: 0.9em;
  }
`;

export const InfoBar = styled.div`
  margin-top: 10px;
  color: #920606;
  font-weight: bold;
  background-color: #ccc;
  width: 100%;
  height: 30px;
  text-align: center;
`;

export const InfoShow = styled.div`
  margin-top: 30px;
  background-color: transparent;
  width: 100%;
  height: 30px;
  text-align: center;
  @media (max-width: 700px) {
    font-size: 12px;
  }
`;

export const TableContainer = styled.div`
  display: flex;

  margin: auto;
`;

export const CustomTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  text-align: center;
  margin-bottom: 10px;
`;

export const THead = styled.thead`
  background: #fff;
  font-weight: bold;
  color: #fff;
`;
export const TR = styled.tr`
  background: #fff;
`;

export const TH = styled.th`
  padding: 7px 0;
  text-align: center;
  color: #920606;
`;

export const TD = styled.td`
  padding: 7px 0;
  text-align: center;
`;

export const TBody = styled.tbody`
  & ${TR}:nth-child(2) {
    background-color: #fff;
  }
`;
export const Label = styled.label`
  text-align: center;

  @media (max-width: 700px) {
    line-height: 40px;
  }
`;

export const FailedContainer = styled.div`
  position: relative;
  width: 80%;
  word-wrap: break-word;
  margin-right: 10px;
  color: #920606;
  font-size: 2rem;
  -ms-transform: translate(-50%, -50%);
  top: 40%;
  left: 10%;
  transform: translateY(-50%);
  @media (max-width: 700px) {
    width: 60%;
    font-size: 1em;
    left: 30%;
  }
`;

export const LoadingContainer = styled.div`
  position: relative;
  color: #920606;
  font-size: 2rem;
  top: 40%;
  -ms-transform: translate(-50%, -50%);
  transform: translateY(-50%);
  @media (max-width: 700px) {
    font-size: 1em;
  }
`;
