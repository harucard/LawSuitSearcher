import InputSearch from "../../components/search/InputSearch";
import { renderWithRedux } from "../utils";

const onkeychange = jest.fn();
const onKeyUp = jest.fn();

describe("Input Component", () => {
  test("Should be rendered ", () => {
    const { getByPlaceholderText, getByRole } = renderWithRedux(
      <InputSearch onChange={onkeychange} onKeyUp={onKeyUp} />
    );
    expect(
      getByPlaceholderText("Informe número do processo")
    ).toBeInTheDocument();
  });

  test("Should not be disabled", () => {
    const { getByRole } = renderWithRedux(
      <InputSearch onChange={onkeychange} onKeyUp={onKeyUp} />
    );
    const input = getByRole("search");
    expect(input).not.toBeDisabled();
  });
});
