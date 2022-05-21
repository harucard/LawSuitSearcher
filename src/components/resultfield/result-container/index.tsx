import { useSelector } from "react-redux";

import {
  selectData,
  selectStatus,
} from "../../../redux/reducers/lawsuitReducer";
import { selectMalFormed } from "../../../redux/reducers/sliceReducer";
import MalformedNumber from "../failed-status/mal-formed-number/MalformedNumber";
import NetworkError from "../failed-status/network-error/NetworkError";
import NotFound from "../failed-status/notfound/NotFound";
import SearcherSpinner from "../loading/SearcherSpinner";
import ShowInfo from "../sucess";
import ResultField from "./ResultField";

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
        Object.keys(data).indexOf("status_op") === -1 &&
        Object.keys(data).indexOf("config") === -1 && (
          <ShowInfo getData={data} />
        )}
      {status === "finished" &&
        Object.keys(data).length > 1 &&
        Object.keys(data).indexOf("config") !== -1 && <NetworkError />}
    </ResultField>
  );
}

export default returnResultField;
