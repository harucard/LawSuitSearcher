import { screen } from "@testing-library/react";
import React from "react";

import App from "../../App";
import { renderWithRedux } from "../utils";

jest.mocked("../components/navbar/Navbar");

describe("App Component", () => {
  test("NavBar component should be in", () => {
    renderWithRedux(<App />);
    expect(screen.getByAltText(/logo1/));
    expect(screen.getByAltText(/logo2/));
  });

  jest.mocked("../components/search");

  test("Search component should be in", () => {
    renderWithRedux(<App />);
    expect(screen.getByPlaceholderText(/Informe número do processo/));
  });

  jest.mocked("../components/statusbar");

  test("StatusBar component should be in", () => {
    renderWithRedux(<App />);
    expect(screen.getByText("Resultados da Pesquisa")).toBeInTheDocument();
  });

  jest.mocked("../components/resultfield/result-container");

  test("ResultField component should be in", () => {
    renderWithRedux(<App />);

    expect(screen.findByTestId("field-container"));
  });
});
