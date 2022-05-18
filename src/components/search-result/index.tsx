import { useSelector } from "react-redux";

import { selectData } from "../../redux/reducers/lawsuitReducer";
import {
  selectLoadState,
  selectMalFormed,
  selectNotFound,
  selectSuccess,
} from "../../redux/reducers/sliceReducer";
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
  const load = useSelector(selectLoadState);
  const malformed = useSelector(selectMalFormed);
  const notfound = useSelector(selectNotFound);
  const success = useSelector(selectSuccess);
  const data = useSelector(selectData);

  return (
    <ResultField>
      {!!load && (
        <SearcherSpinner color={theme.color} loading={theme.loading} />
      )}
      {!!malformed && <MalformedNumber />}
      {!!notfound && <NotFound />}
      {!!success && <ShowInfo getData={data} />}
    </ResultField>
  );
}

export default returnResultField;
