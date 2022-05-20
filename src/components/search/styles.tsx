import styled from "styled-components";

export const SearchContainer = styled.div`
  padding: 10px;
  background-color: #ddd;
  display: flex;
  padding: 20px;
  @media (max-width: 700px) {
    padding: 10px;
  }
`;

export const InputContainer = styled.div`
  position: relative;
  margin: 0 auto;
  width: 40%;
  height: 50px;
  display: flex;
  @media (max-width: 700px) {
    min-width: 310px;
    height: 40px;
  }
`;

export const InputSearch = styled.input`
  padding: 10px 20px;
  outline: none;
  border: none;
  width: 100%;
  border-radius: 25px;
  background-color: #fff;
  font-size: 18px;
  @media (max-width: 700px) {
    font-size: 12px;
  }
`;

export const Label = styled.label`
  position: absolute;
  right: -2px;
  width: 50px;
  height: 100%;
  border-radius: 0 25px 25px 0;
  background-image: linear-gradient(180deg, #5f0c16, #920606);
  text-align: center;
  line-height: 50px;
  color: #fff;
  top: 0;
  @media (max-width: 700px) {
    line-height: 40px;
  }
`;
