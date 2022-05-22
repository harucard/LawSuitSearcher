import { renderHook } from "@testing-library/react";

import useTestMatch from "../../hooks/useTestMatch";

const { tesIfmatch } = useTestMatch();

describe("useInstance hook test", () => {
  test("Should match", () => {
    const { result } = renderHook(() =>
      tesIfmatch("5001682-88.2020.8.13.0672")
    );

    expect(result.current).toBe(true);
  });

  test("Should be false", () => {
    const { result } = renderHook(() => tesIfmatch("5"));

    expect(result.current).toBe(false);
  });
});
