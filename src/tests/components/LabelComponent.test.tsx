import { screen, render, fireEvent } from "@testing-library/react";

import LabelComponent from "../../components/search/LabelComponent";

const onClick = jest.fn();

describe("Label Component", () => {
  test("Handle onClick", () => {
    render(<LabelComponent onClick={onClick} />);
    const label = screen.getByRole("button");

    fireEvent.click(label);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
