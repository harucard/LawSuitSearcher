import ResultField from "./ResultField";
import SearcherSpinner from "./SearcherSpinner";

interface IThemeconfig {
  color: string;
  loading: boolean;
}

const theme: IThemeconfig = {
  color: "#920606",
  loading: true,
};

function returnResultField(): React.ReactElement {
  return (
    <ResultField>
      <SearcherSpinner color={theme.color} loading={theme.loading} />
    </ResultField>
  );
}

export default returnResultField;
