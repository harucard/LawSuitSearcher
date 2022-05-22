import { screen } from "@testing-library/react";

import SearchBar from "../../components/search/SearchBar";
import { renderWithRedux } from "../utils";

const onkeychange = jest.fn();
const onClick = jest.fn();
const onKeyUp = jest.fn();

describe("Search Component", () => {
  test("component should render label", async () => {
    renderWithRedux(
      <SearchBar
        onkeychange={onkeychange}
        onClick={onClick}
        onKeyUp={onKeyUp}
      />
    );
    expect(screen.findByTestId("search-label")).toBeTruthy();
  });

  test("component should render Input inside", () => {
    renderWithRedux(
      <SearchBar
        onkeychange={onkeychange}
        onClick={onClick}
        onKeyUp={onKeyUp}
      />
    );
    expect(screen.findByTestId("search-input")).toBeTruthy();
  });
});
