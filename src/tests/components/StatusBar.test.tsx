import { render, screen } from "@testing-library/react";

import StatusBar from "../../components/statusbar/StatusBar";

describe("StatusBar Component", () => {
  test("should render a sring", () => {
    render(<StatusBar title="String Test" />);
    screen.getByText("String Test");
  });
});
