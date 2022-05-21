import { render } from "@testing-library/react";

import App from "../App";

test("Render with a div which has classname app", () => {
  const { container } = render(<App />);
  expect(container.querySelector(".App")).toBeTruthy();
});
