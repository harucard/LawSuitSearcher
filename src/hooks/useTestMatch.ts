const useTestMatch = () => {
  const tesIfmatch = (word: string) => {
    const REGEX = /(\d{7})-(\d{2}).(\d{4}).(\d).(\d{2}).(\d{4})$/gm;
    const ONLY_NUMBERS = /(^\d{20})$/gm;
    const ismatch = REGEX.test(word);
    const ismatchOnlyNumber = ONLY_NUMBERS.test(word);
    return ismatch || ismatchOnlyNumber;
  };

  return { tesIfmatch };
};

export default useTestMatch;
