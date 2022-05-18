const useInstance = () => {
  const getInstance = (word: number) => {
    let description;
    switch (word) {
      case 1:
        description =
          "1ª instância judicial estadual (TJ), federal (TRF), trabalhista (TRT)";
        break;
      case 2:
        description =
          "2ª instância judicial estadual (TJ), federal (TRF), trabalhista (TRT)";
        break;
      case 3:
        description = "Especial (STJ, STM, TST e TSE)";
        break;
      case 4:
        description = "Extraordinária (STF)";
        break;
      default:
        description = "Instância não encontrada";
    }
    return description;
  };
  return { getInstance };
};

export default useInstance;
