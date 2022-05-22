import { useSelector } from "react-redux";

import { selectData } from "../redux/reducers/standardTypesReducer";

const usePattern = () => {
  const getPattern = (word: number[]) => {
    const param = word[0].toString() + word[1].toString();
    const pattern = useSelector(selectData);

    const patternColletion = new Map();
    if (pattern.length > 0) {
      pattern.forEach((item: any) => {
        const key = item[0].toString() + item[1].toString();
        patternColletion.set(key, item[2]);
      });
    }
    if (patternColletion.size) {
      let response = patternColletion.get(param);
      if (!response) response = "tipo indefinido";
      return response;
    }

    return "Lista Vazia";
  };
  return { getPattern };
};

export default usePattern;
