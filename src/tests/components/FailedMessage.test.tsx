import { screen, render } from "@testing-library/react";

import FailedMessage from "../../components/resultfield/failed-status/failed-message-template/FailedMessage";

describe("Failed Message Component", () => {
  test("String must be rendered", () => {
    render(<FailedMessage message="Failed Message" />);
    screen.getByText("Failed Message");
  });
});
