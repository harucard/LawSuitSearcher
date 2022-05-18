const useTestMatch = () => {
  const tesIfmatch = (word: string) => {
    const REGEX = /(\d{7})-(\d{2}).(\d{4}).(\d).(\d{2}).(\d{4})/gm;
    const ismatch = REGEX.test(word);
    return ismatch;
  };

  return { tesIfmatch };
};

export default useTestMatch;
