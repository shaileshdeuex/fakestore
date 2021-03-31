import "@testing-library/jest-dom";
import { act, render, screen } from "@testing-library/react";

import Footer from "../component/Footer";

describe("Create Footer", () => {
  test("Should render without crushing", async () => {
    await act(async () => {
      render(<Footer />);
    });

    expect(await screen.findByTestId("footer")).toBeInTheDocument();
  });
});
