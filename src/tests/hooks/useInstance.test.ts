import { renderHook } from "@testing-library/react";

import useInstance from "../../hooks/useInstance";

const { getInstance } = useInstance();

describe("useInstance hook test", () => {
  test("Shoulld return Instance", () => {
    const { result } = renderHook(() => getInstance(2));

    expect(result.current).toBe(
      "2ª instância judicial estadual (TJ), federal (TRF), trabalhista (TRT)"
    );
  });

  test("Should return invalid message", () => {
    const { result } = renderHook(() => getInstance(5));

    expect(result.current).toBe("Instância não encontrada");
  });
});
