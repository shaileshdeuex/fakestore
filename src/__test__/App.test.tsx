import "@testing-library/jest-dom";
import { act, render, screen } from "@testing-library/react";
import App from "../App";

describe("Create App Component", () => {
  test("app should get rendered", async () => {
    await act(async () => {
      render(<App />);
    });

    expect(await screen.findByTestId("mainContainer")).toBeInTheDocument();
  });
});
