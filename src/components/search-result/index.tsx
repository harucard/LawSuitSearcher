import { useSelector } from "react-redux";

import { selectData, selectStatus } from "../../redux/reducers/lawsuitReducer";
import { selectMalFormed } from "../../redux/reducers/sliceReducer";
import MalformedNumber from "./MalformedNumber";
import NotFound from "./NotFound";
import ResultField from "./ResultField";
import SearcherSpinner from "./SearcherSpinner";
import ShowInfo from "./ShowInfo";

interface IThemeconfig {
  color: string;
  loading: boolean;
}

const theme: IThemeconfig = {
  color: "#920606",
  loading: true,
};

function returnResultField(): React.ReactElement {
  const malformed = useSelector(selectMalFormed);
  const data = useSelector(selectData);
  const status = useSelector(selectStatus);

  return (
    <ResultField>
      {status === "reading" && (
        <SearcherSpinner color={theme.color} loading={theme.loading} />
      )}
      {!!malformed && <MalformedNumber />}
      {status === "finished" &&
        Object.keys(data).indexOf("status_op") !== -1 && <NotFound />}
      {status === "finished" &&
        Object.keys(data).length > 1 &&
        Object.keys(data).indexOf("status_op") === -1 && (
          <ShowInfo getData={data} />
        )}
    </ResultField>
  );
}

export default returnResultField;
